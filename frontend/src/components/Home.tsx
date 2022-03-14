import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import './Home.scss';
import { useNavigate } from 'react-router-dom';

type Line = {
  text: string;
};

export type Note = {
  _id?: string;
  title: string;
  body: Array<Line>;
};

export const defaultNote: Note = {
  _id: '',
  title: '',
  body: [{text: ''}],
};

type Action = {
  type: string;
  params: any;
};

// URLからノートIDを取得する
const getUrlId = (): string => {
  // "localhost:3000/aa/bb" -> "/aa/bb"
  const pathname = window.location.pathname;
  // "/aa/bb" -> "bb"
  const id = pathname.split('/').slice(-1)[0];
  return id;
};

const Home = () => {
  const navigate = useNavigate();
  // 現在のid
  const [nowNoteId, setNowNoteId] = useState<string>(getUrlId());
  // サイドバー開閉フラグ
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);
  // ノート一覧
  const [notes, setNotes] = useState<Note[]>([defaultNote]);
  
  // ノート一覧を取得
  useEffect(() => {
    console.log('useEffect:', 'ノート一覧を取得:', 'call >>');

    const fetchGet = async () => {
      const url = "http://localhost:8080/api/note";
      const res = await axios.get(url);
      const json = res.data;

      if (json.result === 'ng')
        return;
      console.log('useEffect:', 'ノート一覧を取得:', 'json', json);

      setNotes(json.notes);
      console.log('useEffect:', 'ノート一覧を取得:', '<< success');
    }
    fetchGet();
  }, []);

  // 現在IDのノートを取得
  useEffect(() => {
    console.log('useEffect:', '現在IDのノートを取得:', 'call >>');
    // console.log('useEffect:', '現在IDのノートを取得:', 'nowNoteId =', nowNoteId);
    const fetchGet = async () => {
      const url = `http://localhost:8080/api/note?_id=${nowNoteId}`;
      const res = await axios.get(url);
      const json = res.data;

      if (json.result === 'ng')
        return;
      if (json.notes.length !== 1)
        return;
      console.log('useEffect:', '現在IDのノートを取得:', 'json', json);

      // 取得したノートをセット
      const newNote = json.notes[0];
      console.log('useEffect:', '現在IDのノートを取得:', '<< success');
    }
    fetchGet();
  }, [nowNoteId]);

  useEffect(() => {
    navigate('/' + nowNoteId);
  }, [nowNoteId]);

  return (
    <div className='Home'>
      {console.log('[Home]', 'rendering')}
      {/* サイドバー */}
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        
        nowNoteId={nowNoteId}
        setNowNoteId={setNowNoteId}
        
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
      />
      {/* コンテンツ */}
      <Content
        notes={notes}
        setNotes={setNotes}

        nowNoteId={nowNoteId}
        setNowNoteId={setNowNoteId}

        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
      />
    </div>
  );
};

export default Home;
