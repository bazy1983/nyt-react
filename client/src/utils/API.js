import axios from "axios";

export default {
    getArticles : function(query) {
        return axios.get("/api/getArticles/:" + query);
    },
    saveArticle : function(json) {
        return axios.post("/api/save-article", json)
    },
    getSavedArticles: function(){
        return axios.get("/api/db-articles")
    },
    deleteSavedArticle: function(id){
        return axios.get("/api/db-delete-article/" + id)
    }
}

