import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Cookbook from './pages/Cookbook'
import Recipe from './pages/Recipe'
import JSONHelper from './pages/JSONHelper'
import './App.css';

const data = require("./data/recipeData.json");


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : data
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={(props) => <Home {...props} data={this.state.data} />} />
            <Route path="/about" component={ About } />
            <Route exact path="/recipes" render={(props) => <Cookbook {...props} data={this.state.data} />} />
            <Route path="/recipes/:recipeId" component={ Recipe } />
            <Route exact path="/JSONHelper" component={ JSONHelper } />



          </div>
        </div>
      </Router>
    );
  }
}

export default App;
