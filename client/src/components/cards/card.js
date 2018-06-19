import React, { Component } from "react";
import API from "../../utils/API";
import "./card.css";

class Card extends Component {

    saveArticleHandler = (e) => {
        let thisDom = e.target;
        let articleData = e.target.attributes.getNamedItem("article-data").value;
        let articleJSON = JSON.parse(articleData);
        API.saveArticle(articleJSON)
        .then((data) =>{
            //console.log(data)
            thisDom.style.color = "#f00"
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.articles.map((article) => {
                        return (

                            <div className="col-md-4 my-3 text-center" key={article.articleId}>
                                <div className="card cardWidth">
                                    <img className="card-img-top" src={article.img || "./images/No_Image_Available.jpg"} alt="Card cap" height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title">{article.headline}</h5>
                                        <p className="card-text">{article.snippet}</p>
                                    </div>
                                    <div>
                                        <a href={article.url} target="_blank">
                                            <i className="far fa-file-alt"></i>
                                        </a>
                                        <i className="fas fa-heart" 
                                        article-data={JSON.stringify(article)}
                                        onClick = {this.saveArticleHandler}
                                        style = {article.isSaved?{color:"#f00"}:{color:"#000"}}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })// end of map function
                };
    </div>

        )
    }
}

export default Card;