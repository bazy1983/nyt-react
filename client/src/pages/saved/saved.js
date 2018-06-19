import React, { Component } from "react";
import Card from "../../components/cards";
import Loader from "../../components/loading";
import API from "../../utils/API"


class Saved extends Component {
    state = {
        results: [],
        loading: false
    }
    componentDidMount = () => {
        this.setState({ loading: true })
        API.getSavedArticles()
            .then((data) => {
                this.setState({ results: data.data, loading: false })
            })
    }

    render() {
        return (
            <div>
                {this.state.loading ? <h1>Getting all saved articles, please wait</h1> : <h1>Saved Articles</h1>}
                {this.state.loading ? <Loader /> : null}
                {this.state.results.length === 0 ? null : <Card articles={this.state.results} />}
            </div>
        )
    }
}

export default Saved;