//importing React and router
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//imorting main page component and partial components
import Home from "./pages/home";
import Saved from "./pages/saved";
import Navbar from "./components/navbar";
import './App.css';

//importing api
import API from "./utils/API";

class App extends Component {

  state = {
    query: "",
    results: [],
    loading: false
  }

  //handle submit button click event 
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true })
    API.getArticles(this.state.query)
      .then((data) => {
        this.setState({ loading: false, results: data.data })
        // console.log(this.state.results)
      })
      .catch((err) => {
        console.log("some error!")
        console.log(err)
      })
  }

  inputChangeHandler = (e) => {
    //console.log(e.target.value)
    this.setState({ query: e.target.value })
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    API.getArticles("world cup")
      .then((data) => {
        this.setState({ loading: false, results: data.data })
        // console.log(this.state.results)
      })
      .catch((err) => {
        console.log("some error!")
        console.log(err)
      })
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
            <Switch>
              <Route
                exact path="/"
                render={(props) =>
                  <Home
                    {...props}
                    loading={this.state.loading}
                    articles={this.state.results}
                  />}
              />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  };
};

export default App;
