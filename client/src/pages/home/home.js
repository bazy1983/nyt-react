import React, {Component} from "react";
import Card from "../../components/cards";
import Loader from "../../components/loading"

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Search Some Articles</h1>
                {this.props.loading? <Loader/>: null}
                {this.props.articles.length === 0? null : <Card articles = {this.props.articles}/>}
            </div>
            
        )
    };
};

export default Home;