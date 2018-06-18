const router = require("express").Router();
const request = require("request");

router.get("/getArticles/:query", (req, res) => {
    let allArticles = [];
    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          'api-key': "e33c61265c6e46a09cef99429427d1b8",
          'q': req.params.query
        },
      }, function(err, response, body) {
          if(err) res.status(400).json({err : "can't search that!"})
        body = JSON.parse(body);

        body.response.docs.forEach(element => {
            let oneArticle = {
                id : element.id,
                headline : element.headline.main,
                author : element.byline.original,
                snippet : element.snippet,
                url : element.web_url,
                img : `https://static01.nyt.com/${element.multimedia[0].url}`
            }
            allArticles.push(oneArticle)
        });

        res.status(200).json(allArticles)
      })
});

module.exports = router;
