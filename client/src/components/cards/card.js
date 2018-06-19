import React, { Component } from "react";
import API from "../../utils/API";
import "./card.css";

class Card extends Component {

    saveArticleHandler = (e) => {
        let thisDom = e.target;
        let articleData = e.target.attributes.getNamedItem("article-data").value;
        let articleJSON = JSON.parse(articleData);
        API.saveArticle(articleJSON)
            .then((data) => {
                //console.log(data)
                thisDom.style.color = "#f00"
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deleteArticleHandler = (e) => {
        let articleID = e.target.attributes.getNamedItem("article-id").value;
        API.deleteSavedArticle(articleID)
        .then(() => {
            // window.location.reload()
            document.getElementById(articleID).remove();
        })
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.articles.map((article) => {
                        return (

                            <div className="col-md-4 my-3 text-center" key={article.articleId} id = {article.articleId}>
                                <div className="card cardWidth card-shadow">
                                    <img className="card-img-top" src={article.img || "./images/No_Image_Available.jpg"} alt="Card cap" height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title">{article.headline}</h5>
                                        <p className="card-text">{article.snippet}</p>
                                    </div>
                                    <div>
                                        <a href={article.url} target="_blank">
                                            <i className="far fa-file-alt mx-2 h4"></i>
                                        </a>
                                        {window.location.pathname === "/" ?
                                            <i className="fas fa-heart mx-2 h4"
                                                article-data={JSON.stringify(article)}
                                                onClick={this.saveArticleHandler}
                                                style={article.isSaved ? { color: "#f00" } : { color: "#000" }}
                                            ></i> : <i className="fas fa-trash-alt mx-2 h4"
                                                article-id={article.articleId}
                                                onClick={this.deleteArticleHandler}
                                            ></i>}
                                    </div>
                                </div>
                            </div>
                        )
                    })// end of map function
                }
    </div>

        )
    }
}

export default Card;