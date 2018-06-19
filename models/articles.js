const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema  = new Schema ({
    headline :{
        type : String,
    },
    url : {
        type : String
    },
    snippet : {
        type : String
    },
    img : {
        type : String
    },
    author : {
        type : String
    },
    articleId : {
        type : String,
        unique: true
    }
},{
    timestamps : true
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;