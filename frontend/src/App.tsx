import React, { useEffect, useState } from 'react';
import './App.scss';
// import axios from './axios';
import axios from './axios';

type Note = {
  _id: string;
  title: string;
  body: string;
}

function App() {
  // ノート一覧
  const [notes, setNotes] = useState<Note[]>();

  // サイドバーの表示フラグ
  const flag = false;

  // Sidebar----------------------------------------
  // ノート一覧を表示
  useEffect(() => {
    fetch("http://localhost:8080/api/note/test", {method: 'GET'})
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setNotes(json);
      });
  }, []);

  // Content----------------------------------------


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
          {notes?.map((note) => (
            <li key={note._id}>{note.title}</li>
          ))}
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
