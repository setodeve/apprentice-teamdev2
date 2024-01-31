// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<button onClick={() => testMethod()}></button>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/signup" element={<div>signup</div>} />
        <Route path="/otyakais" element={<div>otyakais</div>} />
        <Route path="/otyakai/:id" element={<div>otyakai</div>} />
      </Routes>
    </>
  );
}

export default App;
