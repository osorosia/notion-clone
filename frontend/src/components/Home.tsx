import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { fetchGetNotes } from '../fetch';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import '../style/Home.scss';
import { useNavigate } from 'react-router-dom';

type Line = {
  text: string;
  style: string;
  font: string[];
};

const defaultLine: Line = {
  text: '',
  style: '',
  font: [],
};

export type Note = {
  _id?: string;
  note_id: number;
  title: string;
  body: Line[];
};

export const defaultNote: Note = {
  note_id: -1,
  title: '',
  body: [defaultLine],
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

const getSortedNotes = (notes: Note[]) => {
  const sortedNotes = notes.slice().sort((note1: Note, note2: Note) => {
    if (note1.note_id < note2.note_id)
      return -1;
    else if (note1.note_id > note2.note_id)
      return 1;
    else
      return 0;
  });
  return sortedNotes;
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
    const fetchGet = async () => {
      const json = await fetchGetNotes();
      if (json.result === 'ng')
        return;

      const sortedNotes = getSortedNotes(json.notes);

      setNotes(sortedNotes);
    }
    fetchGet();
  }, []);

  // URLが'/'のとき、先頭のノートを取得する
  useEffect(() => {
    if (nowNoteId === '' && notes && notes.length > 0 && notes[0]._id)
      setNowNoteId(notes[0]._id);
    navigate('/' + nowNoteId);
  }, [nowNoteId]);

  useEffect(() => {
    if (nowNoteId === '' && notes && notes.length > 0 && notes[0]._id)
      setNowNoteId(notes[0]._id);
  }, [notes]);

  return (
    <div className='Home'>
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
