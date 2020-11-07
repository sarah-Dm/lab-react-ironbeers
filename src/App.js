import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BeersList from './component/BeersList';
import BeerDetails from './component/BeerDetails';
import RandomBeer from './component/RandomBeer';
import AddBeer from './component/AddBeer';
import Home from './component/Home'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeersList} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={AddBeer} />
      </Switch>

    </div>
  );
}

export default App;
