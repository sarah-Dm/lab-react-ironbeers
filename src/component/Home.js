import React from 'react'

import { Link } from 'react-router-dom';
 
const Home = () => {
  return (
      
    <nav className="navbar">
        <div>
          <Link to="/beers"> <img src="https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = ""/> <br/>All Beers</Link>
          <p>See all the beers here!!!</p>
        </div>
        
        <div>
          <Link to="/random-beer"><img src= "https://images.unsplash.com/photo-1462664450306-25ad625a342b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/> <br/> Random Beer </Link>
          <p>Take a random beer!!!</p>
        </div>
        <div>
          <Link to="/new-beer"><img src="https://images.unsplash.com/photo-1521572008054-962cefc90ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/><br/>New Beer</Link>
          <p>Add your new beer!!!</p>
        </div>
        
      </nav>
  )
}
 
export default Home;
