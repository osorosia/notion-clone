import React, { useContext, useEffect, useRef, useState } from 'react';
import Header from './header/Header';
import Title from './main/Title';
import Body from './main/Body';
import { Note, defaultNote } from '../Home';
import { fetchGetNote } from '../../fetch';
import '../../style/Content.scss';

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
    const fetchGet = async () => {
      const json = await fetchGetNote(nowNoteId);
      if (json.result === 'ng')
        return;

      // 取得したノートをセット
      const newNote = json.notes[0];
      setNowNote(newNote);
      setNowNoteTitle(newNote.title);
    }
    fetchGet();
  }, [nowNoteId]);


  return (
    <div className='content'>
      {/* ヘッダー */}
      <Header
        notes={notes}
        setNotes={setNotes}

        nowNoteTitle={nowNoteTitle}
        setNowNoteTitle={setNowNoteTitle}

        nowNoteId={nowNoteId}
        setNowNoteId={setNowNoteId}

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
        <Body 
          nowNote={nowNote}
          setNowNote={setNowNote}
        />

      </div>
    </div>
  );
};

export default Content;
