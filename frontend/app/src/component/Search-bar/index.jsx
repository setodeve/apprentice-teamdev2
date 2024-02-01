import React from 'react';
import './index.css'; // CSSファイルのインポート方法を変更

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="キーワードを入力..." />
    </div>
  );
};

export default SearchBar;
