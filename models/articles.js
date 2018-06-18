const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema  = new Schema ({
    title :{
        type : String,
    },
    url : {
        type : String
    },
    snippet : {
        type : String
    },
    image : {
        type : String
    },
    author : {
        type : String
    },
    published : {
        type : Date
    }
},{
    timestamps : true
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;