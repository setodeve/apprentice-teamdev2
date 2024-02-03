import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchBar from '../Search-bar/search-bar';
import GreenButton from '../GreenButton';
import WhiteButton from '../WhiteButton';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><img src="/image/app-logo.png" alt="app-dev2" /></Link>
      </div>
      <nav>
        {isLoggedIn ? (
          <ul>
            <li><SearchBar /></li>
            <li><Link to="/profile"><GreenButton name="My Profile"/></Link></li>
            <li><Link to="/"><GreenButton name="Log Out"/></Link> </li>
          </ul>
        ) : (
          <ul>
            {/* <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Logout</Link></li> */}

            <li><GreenButton><Link to="/signup">Signup</Link></GreenButton></li>
            <li><GreenButton><Link to="/login">Logout</Link></GreenButton></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
