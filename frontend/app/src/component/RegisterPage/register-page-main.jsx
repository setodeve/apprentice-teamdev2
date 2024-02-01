import React from 'react';
import './register-page-main.css';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <h1>Signup</h1>
      <form action="/submit-your-register-form" method="post">
        <div className="input-group">
          <input type="text" id="name" name="user[name]" placeholder="アカウント名" required />
        </div>
        <div className="input-group">
          <input type="email" id="email" name="user[email]" placeholder="メールアドレス" required />
        </div>
        <div className="input-group">
          <input type="password" id="password" name="user[password]" placeholder="パスワード" required />
        </div>
        <div className="input-group">
          <input type="password" id="password_confirmation" name="user[password_confirmation]" placeholder="パスワード確認" required />
        </div>
        <button type="submit">新規登録</button>
      </form>
    </div>
  );
};

export default RegisterPage;
