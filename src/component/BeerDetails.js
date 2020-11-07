import React from 'react';
import Header from './Header';
import axios from 'axios';

class BeerDetails extends React.Component {
  state = { beer: {} };

  //récupérer l'id dans le params de l'url
  findBeer = () => {
    let id = this.props.match.params.id;
    console.log(id);
    //find la bière dans l'API qui correspond à cet id
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((beerFromAPI) => {
        console.log(beerFromAPI);
        //mettre la bière dans le state
        this.setState({ beer: beerFromAPI.data });
      })
      .catch((err) => console.log("échec dans le fetch d'id", err));
  };

  componentDidMount() {
    this.findBeer();
  }

  render() {
    return (
      <div>
        <Header />
        {/* afficher les clés de la bière dans le rendu BeerDetails */}
        <img src={this.state.beer.image_url} alt=""></img>
        <h2>{this.state.beer.name}</h2>
        <h2>{this.state.beer.tagline}</h2>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>Created by : {this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

export default BeerDetails;
