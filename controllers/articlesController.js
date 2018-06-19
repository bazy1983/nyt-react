const db = require("../models");

module.exports = {
    //here goes all db CRUD
    saveArticle : (req, res) => {
        db.Article.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log("inserting new article when wrong");
            console.log(err);
            res.status(500).json({err : "could not save article!"})
        })
    },
    compareArticles : (callback) => {
        db.Article.find({})
        .then((data)=>{
            callback(data)
        })
        .catch((err) => {
            console.log("could not get articles to compare!");
            console.log(err)
        })
    },
    getAllArticles : (req, res) => {
        db.Article.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json({err : "something went wrong"})
        })
    },
    deleteArticleById : (req, res) => {
        db.Article.remove({articleId : req.params.id})
        .then(() => {
            res.status(200).json({data : "okay"})
        })
        .catch((err) => {
            console.log("error while deleting an article")
            console.log(err)
        })
    }
}