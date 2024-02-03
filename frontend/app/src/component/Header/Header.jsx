import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchBar from '../Search-bar/search-bar';

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
            <li><Link to="/profile">My Profile</Link></li>
            <li><a href="/" onClick={onLogout}>Logout</a></li>
          </ul>
        ) : (
          <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Logout</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
