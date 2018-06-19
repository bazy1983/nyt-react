const router = require("express").Router();
const request = require("request");
const nytKey = require("../key").NYT_KEY || process.env.NYT_KEY;
const dbControl = require("../controllers/articlesController");

router.get("/getArticles/:query", (req, res) => {
    let allArticles = [];
    let savedIDs = []

    dbControl.compareArticles((results) =>{
        savedIDs = results.map((article) =>{
            return article.articleId
        })
        console.log(savedIDs)
    })

    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          'api-key': nytKey,
          'q': req.params.query
        },
      }, function(err, response, body) {
          if(err) res.status(400).json({err : "can't search that!"})
        
        body = JSON.parse(body);
        body.response.docs.forEach(element => {

            let author = "", img = "", isSaved = false;
            
            if (element.byline) author = element.byline.original
            if (element.multimedia[0]) img = `https://static01.nyt.com/${element.multimedia[0].url}`;
            if (savedIDs.includes(element._id)) isSaved = true
            let oneArticle = {
                articleId : element._id,
                headline : element.headline.main,
                author : author,
                snippet : element.snippet.substring(0, 200) + "...",
                url : element.web_url,
                img : img,
                isSaved : isSaved
            }
            allArticles.push(oneArticle)
        });

        res.status(200).json(allArticles)
      })
});


router.post("/save-article", (req, res)=>{
    //save article to mongodb
    dbControl.saveArticle(req,res)
})

module.exports = router;
