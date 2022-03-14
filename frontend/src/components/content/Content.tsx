import React, { useContext, useEffect, useRef, useState } from 'react';
import Header from './header/Header';
import Line from './Line';
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


  // タイトル変更
  const handleInputTitle = (e: any) => {
    const nextTitle = e.target.innerHTML;
    setNowNoteTitle(nextTitle);

    // ノート一覧を更新
    let nextNotes = notes?.slice();
    let nextNote = nextNotes?.find((elm: any) => elm._id === nowNoteId);
    if (nextNote)
      nextNote.title = nextTitle;
    setNotes(nextNotes);
    
    // DBに送信
    const fetchPost = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const url = `http://localhost:8080/api/note/update?_id=${nowNote._id}`;
      const params = { title: nextTitle };
      const res = await axios.put(url, params);
      const json = res.data;

      if (json.result === 'ng')
        console.log('POST error');
    };
    fetchPost();
  };

  // タイトルフォーカス時のキー入力を制御
  const handleKeyPressTitle = (e: any) => {
    if (e.key === 'Enter')
      return e.preventDefault();
  };

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
        <div className='content-main-title'>
          <div
            className='content-main-title-text-editor'
            contentEditable
            suppressContentEditableWarning
            onKeyPress={handleKeyPressTitle}
            onInput={handleInputTitle}
            placeholder='無題'
          >
            {nowNote.title}
          </div>
        </div>

        {/* ボディ */}
        <div className='content-main-body'>
          {nowNote.body.map((line: any, i: number) => (
            <Line
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
