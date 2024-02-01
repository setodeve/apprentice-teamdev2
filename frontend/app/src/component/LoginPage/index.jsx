import React from 'react';
import './index.css'; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form action="/submit-your-login-form" method="post">
        <div className="input-group">
          <input type="email" id="email" name="user[email]" placeholder="メールアドレス" required />
        </div>
        <div className="input-group">
          <input type="password" id="password" name="user[password]" placeholder="パスワード" required />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;

