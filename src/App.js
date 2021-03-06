import React, { Component } from 'react';
import './App.css';
// add the react router module
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import MovieList from "./MovieList";
import Movie from "./Movie";


class App extends Component {
  render() {
    const superHero="batman";
    // The router goes around everything it needs to control
    return (
      <Router>
        <div className="App">
        <ul>
          {/* in React router, we DONT USE ANCHOR TAGS */}
          {/* That's so 2015..... */}
          {/* Link component is the new anchor tag (<a>) */}
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/movies">Movies</Link>
        </ul>
        {/* Use the Route component to set up a path match*/}
        {/* if the path matches the browser path, it will render */}
        {/* whatever is given as component prop */}
        {/* route is self closing */}
        {/* if you have a path by itself, it will look for that path in the url */}
        {/* can use render to pass in props */}
          <Route exact path="/" render={(props)=><Home superHero={superHero}/>}/>
          {/* this way of writing an anonymous function is the same as using brackets with RETURN */}
          <Route path="/about" component={About}/>
          <Route path="/movies" component={MovieList}/>
          {/* :MovieId = wildcard for params */}
          <Route path="/movies/:movieId" component={Movie}/>
        </div>
      </Router>
    );
  }
}

export default App;
