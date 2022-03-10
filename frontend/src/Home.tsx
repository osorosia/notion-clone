import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import axios from 'axios';
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
  let navigate = useNavigate();
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
    const fetchGet = async () => {
      const url = "http://localhost:8080/api/note";
      const res = await axios.get(url);
      const json = res.data;

      console.log('setNotes()', json);
      setNotes(json);
    }
    fetchGet();
  }, [noteId]);
  
  // Content----------------------------------------
  // ノートIDに応じたノートをコンテントに表示
  useEffect(() => {
    const fetchGet = async () => {
      const url = `http://localhost:8080/api/note?_id=${noteId}`;
      const res = await axios.get(url);
      const json = res.data;

      console.log('setNowNote()', json[0]);
      setNowNote(json[0]);
      setNoteTitle(json[0].title);
    };
    fetchGet();
  }, [noteId]);

  // タイトル変更
  const onChangeTitle = (_id: string, title: string) => {
    setNoteTitle(title);
    // DBにPUTする
    const fetchUpdate = async () => {
      const url = `http://localhost:8080/api/note/update?_id=${_id}`;
      const params = { title: noteTitle };
      const res = await axios.put(url, params);
      const json = res.data;

      if (json.result == 'ng')
        console.log('update error');
    };
    fetchUpdate();
  };

  // ノート削除
  const deleteNote = (id: string) => {
    const fetchDelete = async () => {
      const url = `http://localhost:8080/api/note/delete?_id=${id}`;
      const res = await axios.delete(url);
      const json = res.data;

      // ノート一覧を更新
      const nextNotes = notes?.slice().filter((note, i, arr) => {
        return id !== note._id;
      });
      setNotes(nextNotes);
      
      // 開いてるノートを消した場合、1番上のノートにリダイレクト
      if (id === noteId) {
        if (notes) {
          setNoteId(notes[0]._id);
          navigate('/' + notes[0]._id);
        }
        else
          navigate('/');
      }
    };
    fetchDelete();
  };

  // ノートを新規作成
  const createNote = () => {
    const fetchPost = async () => {
      const url = 'http://localhost:8080/api/note/new';
      const params = {
        title: '',
        body: '',
      };
      const res = await axios.post(url, params);
      const json = res.data;

      if (json.result === 'ng')
        return;

      // 新規ノートにリダイレクト
      setNoteId(json._id);
      navigate('/' + json.id);
    };
    fetchPost();
  }

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
            <li
              style={{ background: note?._id == noteId ? "rgba(55, 53, 47, 0.08)" : ""}}
            >
              <Link
                className='sidebar-link'
                to={note._id}
                key={i}
                onClick={() => setNoteId(note._id)}
              >
                <StickyNote2OutlinedIcon />
                {note.title === '' ? '無題' : note.title}
              </Link>
              {/* 削除ボタン */}
              <button
                onClick={() => {deleteNote(note._id)}}
              >
                <DeleteOutlineOutlinedIcon />
              </button>
            </li>
          ))}
          <li
            onClick={() => {createNote()}}
          >
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
            onChange={(e) => onChangeTitle(noteId, e.target.value)}
          />
        </p>
        {/* 本文 */}
        <p>{nowNote.body}</p>
      </div>
    </div>
  );
}

export default Home;
