import React, { useContext, useEffect, useRef, useState } from 'react';
import Header from './header/Header';
import Line from './main/Line';
import Title from './main/Title';
import { Note, defaultNote } from '../Home';
import axios from 'axios';

const Content = (props: any) => {
  const {
    notes,
    setNotes,
    nowNoteId,
    setNowNoteId,
    visibleSidebar,
    setVisibleSidebar,
  } = props;

  // 現在のノート
  const [nowNote, setNowNote] = useState<Note>(defaultNote);
  // ノートのタイトル
  const [nowNoteTitle, setNowNoteTitle] = useState<string>('');

  // 現在のノートをDBにから取得
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
      setNowNote(newNote);
      setNowNoteTitle(newNote.title);
      console.log('useEffect:', '現在IDのノートを取得:', '<< success');
    }
    fetchGet();
  }, [nowNoteId]);


  return (
    <div className='content'>
      {console.log('[Content]', 'rendering')}
      {/* ヘッダー */}
      <Header
        nowNoteTitle={nowNoteTitle}
        setNowNoteTitle={setNowNoteTitle}

        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
      />

      {/* メイン */}
      <div className='content-main'>

        {/* タイトル */}
        <Title
          notes={notes}
          setNotes={setNotes}
  
          nowNoteId={nowNoteId}
          setNowNoteId={setNowNoteId}

          nowNote={nowNote}
          setNowNote={setNowNote}

          nowNoteTitle={nowNoteTitle}
          setNowNoteTitle={setNowNoteTitle}
        />

        {/* ボディ */}
        <div className='content-main-body'>
          {nowNote.body.map((line: any, i: number) => (
            <Line
              key={i}
              index={i}
              text={line.text}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Content;
