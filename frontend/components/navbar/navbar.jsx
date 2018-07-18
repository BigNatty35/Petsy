import React from 'react';
import {Link} from 'react-router-dom';

const  Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link to='/catergories/entertainment'> <li>Entertainment</li> </Link>
        <Link to='/catergories/pets'><li>Pets</li></Link>
        <Link to='/catergories/food'><li>Food</li></Link>
        <Link to='/catergories/clothes'><li>Clothes</li></Link>
        <Link to='/catergories/jewlery'><li>Jewelry</li></Link>
        <Link to='/catergories/vehicles'><li>Vehicles</li></Link>
        <Link to='/catergories/household'><li>Household</li></Link>
        <Link to='/catergories/electronics'><li>Electronics</li></Link>
      </ul>
    </nav>
  );
};



export default Navbar;