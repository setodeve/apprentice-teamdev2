import React from 'react';
import './search-bar.css'; // CSSファイルのインポート方法を変更

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className='shadow bar' placeholder="キーワードを入力..." />
      <input type='submit' className='shadow btn' value="検索" />
    </div>
  );
};

export default SearchBar;
