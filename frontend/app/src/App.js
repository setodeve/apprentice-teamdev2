import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './component/Header/Header';
import OtyakaiList from './component/OtyakaiList';
import OtyakaiShow from './component/OtyakaiShow';
import CreateOtyakaiPage from './component/CreateOtyakaiPage/createOtyakaiPage';
function App() {
  return (
    <>
      <HeaderInfo/>
      <Routes>
        <Route path="/login" element={<div>login</div>} />
        <Route path="/signup" element={<div>signup</div>} />
        <Route path="/" element={<OtyakaiList/>} />
        <Route path="/otyakais/new" element={<CreateOtyakaiPage/>} />
        <Route path="/otyakais/:id" element={<OtyakaiShow />} />
      </Routes>
    </>
  );
}

const HeaderInfo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    </div>
  );
};

export default App;
