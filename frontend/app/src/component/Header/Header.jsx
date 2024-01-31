import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchBar from '../Search-bar';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">Dev2-Apprentice</div> {/* TODO: ロゴが決まったら差し替える */}
      <nav>
        {isLoggedIn ? (
          <ul>
            <li><Link to="/profile">My Profile</Link></li>
            <li><a href="#" onClick={onLogout}>Logout</a></li>
            <li><SearchBar /></li>
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
