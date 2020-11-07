import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BeersList from './component/BeersList';
import BeerDetails from './component/BeerDetails';
import RandomBeer from './component/RandomBeer';
import AddBeer from './component/AddBeer';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/beers">All Beers</Link>
        <Link to="/random-beer">Random Beer </Link>
        <Link to="/new-beer">New Beer</Link>
      </nav>
      <Switch>
        <Route exact path="/beers" component={BeersList} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={AddBeer} />
      </Switch>
    </div>
  );
}

export default App;
