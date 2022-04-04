import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import '../../style.css';
import { CgLaptop } from 'react-icons/cg';

const navLink = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  fontSize: "1rem"
};

const logo = {
  textDecoration: "none",
  color: 'white',
  fontSize: "1.9rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const Header = () => {
  return (
      <header>
        <div className="container inner-header">
            <Link to="/" style={logo}><span style={{fontSize: "1.7rem", marginRight: ".7rem"}}><CgLaptop /></span> LaptopStore</Link>
            
            <nav>
                <Link to="/home" className='nav-link' style={navLink}>Home</Link>
                <Link to="/reviews" className='nav-link' style={navLink}>Reviews</Link>
                <Link to="/dashboard" className='nav-link' style={navLink}>Dashboard</Link>
                <Link to="/blogs" className='nav-link' style={navLink}>Blogs</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header