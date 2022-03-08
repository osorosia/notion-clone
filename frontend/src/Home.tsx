import React, { useEffect, useState } from 'react';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link, Outlet } from 'react-router-dom';
import './Home.scss';

type Note = {
  _id: string;
  title: string;
  body: string;
}

// URLからノートIDを取得する
const getUrlId = (): string => {
  // "localhost:3000/aa/bb" -> "/aa/bb"
  const pathname = window.location.pathname;
  // "/aa/bb" -> "bb"
  const id = pathname.split('/').slice(-1)[0];
  return id;
};

function Home() {
  // ノート一覧
  const [notes, setNotes] = useState<Note[]>();
  // 開いているノートID
  const [noteId, setNoteId] = useState<string>(getUrlId());

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
  // ノートIDに応じたノートをコンテントに表示
  useEffect(() => {
    console.log(noteId, '---------------------');
  }, [noteId]);

  return (
    <div className="Home">
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
          {notes?.map((note, i) => (
            <li><Link
              to={note._id}
              key={i}
              onClick={() => setNoteId(note._id)}
            >
              <StickyNote2OutlinedIcon />
              {note.title}
            </Link></li>
          ))}
          <li>
            <AddOutlinedIcon />
            ページを追加する
          </li>
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

export default Home;
