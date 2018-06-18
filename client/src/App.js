import React, { Component } from 'react';
import Home from "./pages/home";
import Navbar from "./components/navbar";
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <Home />
      </div>
    );
  };
};

export default App;
