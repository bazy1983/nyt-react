import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/home";
import Navbar from "./components/navbar";
import './App.css';
import API from "./utils/API";

class App extends Component {

  state = {
    query: "",
    results: [],
    loading: false
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true })
    API.getArticles(this.state.query)
      .then((data) => {
        this.setState({ loading: false, results : data.data })
        // console.log(this.state.results)
      })
      .catch((err) => {
        console.log("some error!")
        console.log(err)
      })
  }

  inputChangeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ query: e.target.value })
  }

  render() {
    return (
      <div>
        <Navbar
          search={this.submitHandler}
          inputChangeHandler={this.inputChangeHandler}
          filledInput={this.state.query}
        />
        <div className="container">
          <Router>
            <Route
              path="/"
              render={(props) =>
                <Home
                  {...props}
                  showText={this.state.query}
                  loading={this.state.loading}
                  articles = {this.state.results}
                />}
            />
          </Router>
        </div>
      </div>
    );
  };
};

export default App;
