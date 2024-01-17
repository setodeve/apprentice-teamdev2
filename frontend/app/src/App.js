// import logo from './logo.svg';
import './App.css';
import axios from "axios";


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
    <button onClick={() => testMethod()}></button>
    // <Button onClick={() => testMethod()}>ボタン</Button>
  );
}

export default App;
