import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import '../../style.css';

const navLink = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const logo = {
  textDecoration: "none",
  color: 'white',
  fontSize: "1.7rem",
}

const Header = () => {
  return (
      <header>
        <div className="container inner-header">
            <Link to="/" style={logo}>LaptopStore</Link>
            
            <nav>
                <Link to="/home" className='nav-link' style={navLink}>Home</Link>
                <Link to="/reviews" className='nav-link' style={navLink}>Reviews</Link>
                <Link to="/blogs" className='nav-link' style={navLink}>Blogs</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header