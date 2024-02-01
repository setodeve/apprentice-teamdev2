import logo from './logo.svg';
import './App.css';

import logo1 from './src/logo1.png';
import logo2 from './src/logo2.png';
import logo3 from './src/logo3.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>アプリの特徴</h1>
      </header>
      <body>
        <div className = 'center'>
          <div className = 'center2'>
            <img src={logo1}></img>
            <p>タイムライン形式で<br></br>イベントを表示</p>
          </div>
          <div className = 'center2'>
            <img src={logo2}></img>
            <p>ワンクリックで参加登録</p>
          </div>
          <div className = 'center2'>
            <img src={logo3}></img>
            <p>気になるユーザーを<br></br>フォローして交流</p>
          </div>
        </div>


      </body>
    </div>
  );
}

export default App;
