import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import './Home.scss';

type Line = {
  text: string;
};

export type Note = {
  _id?: string;
  title: string;
  body: Array<Line>;
};

const defaultNote: Note = {
  _id: '',
  title: '',
  body: [{text: ''}],
};

type Action = {
  type: string;
  params: any;
};

const reducerNote = (state: any, action: any) : any => {
  let note = Object.assign({}, state);
  const {type, params} = action;
  console.log('dispatch:', type);

  // ノートをセットする
  if (type === 'set_note') {

  }

  // タイトルをセットする
  if (type === 'set_title') {

  }

  // 行を編集する
  if (type === 'edit_line') {

  }

  // 行を入れ替える
  if (type === 'swap_line') {

  }

  // 行を挿入する
  if (type === 'insert_line') {

  }
}

const Home = () => {
  // 現在のid
  const [nowNoteId, setNowNoteId] = useState<string>('');
  // サイドバー開閉フラグ
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);
  // 現在のノート
  // const [nowNote, setNowNote] = useState<Note>(defaultNote);
  const [note, dispatch] = useReducer(reducerNote, defaultNote);
  // ノート一覧
  const [notes, setNotes] = useState<Note[]>([defaultNote]);

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
      <>
        {/* サイドバー */}
        <Sidebar
          notes={notes}
          setNotes={setNotes}
          visibleSidebar={visibleSidebar}
          setVisibleSidebar={setVisibleSidebar}
        />
        {/* コンテンツ */}
        <Content
          visibleSidebar={visibleSidebar}
          setVisibleSidebar={setVisibleSidebar}
        />
      </>
    </div>
  );
};

export default Home;
