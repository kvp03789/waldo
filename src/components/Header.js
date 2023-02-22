import React from 'react';
import Logo from '../images/isocachelogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h3>Leaderboard</h3>
      </div>

      <div>
        <Link to="/mapselect">
          <img src={Logo} className="logo"></img>
        </Link> 
      </div>

      <div className="header-container">
        <h3>Info</h3>
      </div>
    </div>
  )
}

export default Header