import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import './Home.scss';

type Line = {
  text: string;
};

type Note = {
  _id: string;
  title: string;
  body: Array<Line>;
};

const defaultNote: Note = {
  _id: '',
  title: '',
  body: [{text: ''}],
};

const Home = () => {
  // 現在のid
  const [nowNoteId, setNowNoteId] = useState<string>('');
  // サイドバー開閉フラグ
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);
  // 現在のノート
  const [nowNote, setNowNote] = useState<Note>(defaultNote);
  // ノート一覧
  const [notes, setNotes] = useState<Note[]>();

  // ノート一覧を取得
  useEffect(() => {
    const fetchGet = async () => {
      const url = "http://localhost:8080/api/note";
      const res = await axios.get(url);
      const json = res.data;

      console.log('setNotes()', json);
      setNotes(json);
    }
    fetchGet();
  }, []);

  return (
    <div className='Home'>
      {/* サイドバー */}
      <Sidebar />
      {/* コンテンツ */}
      <Content />
    </div>
  );
};

export default Home;
