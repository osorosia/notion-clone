import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import './Home.scss';

type Note = {
  _id: string;
  title: string;
  body: string;
}

const defaultNote: Note = {
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
  // - サイドバー
  // ノート一覧
  const [notes, setNotes] = useState<Note[]>();
  // 開いているノートID
  const [noteId, setNoteId] = useState<string>(getUrlId());
  // 開いてるノート
  const [nowNote, setNowNote] = useState<Note>(defaultNote);
  // タイトル
  const [noteTitle, setNoteTitle] = useState<string>('');
  // サイドバーの表示フラグ
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);

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
      setNoteTitle(json[0].title);
    });
  }, [noteId]);

  // タイトル変更
  const onChangeTitle = (title: string) => {
    setNoteTitle(title);
    // DBにPUTする
  };

  // ノート削除
  const deleteNote = (id: string) => {
    const fetchDelete = async () => {
      const url = `http://localhost:8080/api/note/delete?_id=${id}`;
      const res = await fetch(url, {method: 'DELETE'})
      const json = await res.json();
      console.log(json);
    };
    fetchDelete();
  };

  return (
    <div className="Home">
      {/* Sidebar------------------------------------------ */}
      <div
        className="sidebar"
        style={{display: visibleSidebar ? '' : 'none'}}
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
            <li>
              <Link
                className='sidebar-link'
                to={note._id}
                key={i}
                onClick={() => setNoteId(note._id)}
              >
                <StickyNote2OutlinedIcon />
                {note.title}
              </Link>
              {/* 削除ボタン */}
              <button
                onClick={() => {deleteNote(note._id)}}
              >
                <DeleteOutlineOutlinedIcon />
              </button>
            </li>
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
        <button
          onClick={() => setVisibleSidebar(!visibleSidebar)}
          style={{display: 'inline-block'}}
        >
          <MenuOutlinedIcon />
        </button>
        <p style={{display: 'inline-block'}}>{nowNote.title}</p>

        {/* タイトル */}
        <p>
          <input
            type='text'
            value={noteTitle}
            onChange={(e) => onChangeTitle(e.target.value)}
          />
        </p>
        {/* 本文 */}
        <p>{nowNote.body}</p>
      </div>
    </div>
  );
}

export default Home;
