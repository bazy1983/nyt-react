import React, {Component} from "react";
import Card from "../../components/cards";
import Loader from "../../components/loading"

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>home page</p>
                <p>{this.props.showText}</p>
                {this.props.loading? <Loader/>: null}
                {this.props.articles.length === 0? null : <Card articles = {this.props.articles}/>}
            </div>
            
        )
    };
};

export default Home;