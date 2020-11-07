import React from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';

class BeersList extends React.Component {
  state = {
    listOfBeers: [],
  };
  getAllBeers = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((beersFromApi) => {
        this.setState({
          listOfBeers: beersFromApi.data,
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }
  
  render() {
    return (
      <div>
        <Header />
        <ul>
          {this.state.listOfBeers.map((beer) => (
            <li key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <img style={{ height: '200px' }} src={beer.image_url} alt="" />
              </Link>
              <h2>{beer.name}</h2>
              <h3>Created by: {beer.contributed_by}</h3>
              <h3>{beer.tagline}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BeersList;
