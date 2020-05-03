import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
