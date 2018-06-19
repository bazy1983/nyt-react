const router = require("express").Router();
const request = require("request");
const nytKey = require("../key").NYT_KEY || process.env.NYT_KEY;
const control = require("../controllers/articlesController");

router.get("/getArticles/:query", (req, res) => {
    let allArticles = [];
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

            let author = "", img = "";
            
            if (element.byline) author = element.byline.original
            if (element.multimedia[0]) img = `https://static01.nyt.com/${element.multimedia[0].url}`;

            let oneArticle = {
                articleId : element._id,
                headline : element.headline.main,
                author : author,
                snippet : element.snippet.substring(0, 200) + "...",
                url : element.web_url,
                img : img
            }
            allArticles.push(oneArticle)
        });

        res.status(200).json(allArticles)
      })
});

router.post("/save-article", (req, res)=>{
    //save article to mongodb
    control.saveArticle(req,res)
})

module.exports = router;
