import React from "react";

const Card = (props) => (
    <div className="row">
        {
            props.articles.map((article) => {
                return (
    
                    <div className="col-md-6" key = {article.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src="https://placehold.it/300/400" alt="Card cap" height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div>
                                <i className="far fa-file-alt"></i>
                                <i className="far fa-heart"></i>
                                <i className="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                )
            })// end of map function
        };
    </div>
)

export default Card;