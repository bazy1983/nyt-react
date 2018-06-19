import axios from "axios";

export default {
    getArticles : function(query) {
        return axios.get("/api/getArticles/:" + query);
    },
    saveArticle : function(json) {
        return axios.post("/api/save-article", json)
    }
}

