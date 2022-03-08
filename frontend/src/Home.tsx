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

const defaultNote = {
  _id: '',
  title: '',
  body: '',
} as const;

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
  // 開いてるノート
  const [nowNote, setNowNote] = useState<Note>(defaultNote);

  // サイドバーの表示フラグ
  const flag = false;

  // Sidebar----------------------------------------
  // ノート一覧を表示
  useEffect(() => {
    fetch("http://localhost:8080/api/note", {method: 'GET'})
      .then(res => res.json())
      .then(json => {
        console.log('setNotes()', json);
        setNotes(json);
      });
  }, []);
  
  // Content----------------------------------------
  // ノートIDに応じたノートをコンテントに表示
  useEffect(() => {
    // クエリパラメータ作成
    const url = `http://localhost:8080/api/note?_id=${noteId}`;
    console.log(url);

    // APIからノート取得
    fetch(url, {method: 'GET'})
    .then(res => res.json())
    .then(json => {
      console.log('setNowNote()', json[0]);
      setNowNote(json[0]);
    });
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
              className='sidebar-link'
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
        {/* タイトル */}
        {console.log('nowNote', nowNote)}
        <p>{nowNote.title}</p>
        {/* 本文 */}
        <p>{nowNote.body}</p>
      </div>
    </div>
  );
}

export default Home;
