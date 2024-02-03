// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './component/Header/Header';
import OtyakaiList from './component/OtyakaiList';
import OtyakaiShow from './component/OtyakaiShow';
import CreateOtyakaiPage from './component/CreateOtyakaiPage/createOtyakaiPage';
function App() {
  const testMethod = () => {
    axios
      .get(`${"http://localhost:8080"}/api/test`, {
        params: {
          name: "test"
        }
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        } else {
          console.log("失敗しました");
        }
      })
      .catch(() => {
        console.log("catch");
      });
  }
  
  return (
    <>
      <HeaderInfo/>
      <Routes>
        <Route path="/" element={<button onClick={() => testMethod()}></button>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/signup" element={<div>signup</div>} />
        <Route path="/otyakais" element={<OtyakaiList/>} />
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
