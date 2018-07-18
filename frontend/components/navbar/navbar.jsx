import React from 'react';
import {Link} from 'react-router-dom';

const  Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link to='/catergories/1'> <li>Entertainment</li> </Link>
        <Link to='/catergories/2'><li>Pets</li></Link>
        <Link to='/catergories/3'><li>Food</li></Link>
        <Link to='/catergories/4'><li>Clothes</li></Link>
        <Link to='/catergories/5'><li>Jewelry</li></Link>
        <Link to='/catergories/6'><li>Vehicles</li></Link>
        <Link to='/catergories/7'><li>Household</li></Link>
        <Link to='/catergories/8'><li>Electronics</li></Link>
      </ul>
    </nav>
  );
};



export default Navbar;