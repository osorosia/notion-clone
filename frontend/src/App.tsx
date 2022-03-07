import React from 'react';
import './App.scss';

function App() {
  const flag = false;
  return (
    <div className="App">
      {/* Sidebar------------------------------------------ */}
      <div
        className="sidebar"
        style={{display: flag ? 'none' : ''}}
      >
        {/* ヘッダー */}
        <p>○○さんのNotion</p>

        {/* メニュー上部 */}
        <ul>
          <li>検索</li>
          <li>更新一覧</li>
          <li>設定</li>
        </ul>

        {/* ノート一覧 */}
        <ul>
          <li>使ってみる</li>
          <li>クイックメモ</li>
          <li>タスク管理</li>
        </ul>

        {/* メニュー下部 */}
        <ul>
          <li>テンプレート</li>
          <li>インポート</li>
          <li>ゴミ箱</li>
        </ul>

      </div>

      
      {/* Content------------------------------------------- */}
      <div className="content">
        {/* ヘッダー */}
        <p>title</p>
        {/* 本文 */}
        <p>title</p>
        <ul>
          <li>aaa</li>
          <li>bbbb</li>
          <li>ccccc</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
