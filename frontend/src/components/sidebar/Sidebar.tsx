import React from 'react';
import NoteItem from './note/NoteItem';
import axios from 'axios';
import { Note } from '../Home';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props: any) => {
  const {
    notes,
    setNotes,

    nowNoteId,
    setNowNoteId,

    visibleSidebar,
    setVisibleSidebar,
  } = props;

  // ノートを新規作成
  const createNote = () => {
    console.log('createNote():', 'call >>');

    const fetchPost = async () => {
      let newNote: Note = {
        title: '',
        body: [{text: ''}],
      };
      
      // DBに新規ノートをpost
      const url = 'http://localhost:8080/api/note/new';
      const params = newNote;
      const res = await axios.post(url, params);
      const json = res.data;
      
      console.log('createNote():', 'json', json);
      if (json.result === 'ng')
        return;
      newNote._id = json._id;

      // 成功したらノート一覧を更新
      const nextNotes = notes.slice();
      nextNotes.push(newNote);
      setNotes(nextNotes);

      // 現在のノートIDを更新
      setNowNoteId(json._id);

      console.log('createNote():', '<< success');
    }
    fetchPost();
  }

  // ノートを削除
  const deleteNote = (_id: string) => {
    console.log('deleteNote():', 'call');

    const fetchDelete = async () => {
      // 削除するノートID
      console.log('deleteNote(): _id =', _id);
      // DBから削除
      const url = `http://localhost:8080/api/note/delete?_id=${_id}`;
      const res = await axios.delete(url);
      const json = res.data;

      console.log('deleteNote():', 'json', json);
      if (json.result === 'ng')
        return;
      
      // 削除できたらノート一覧を更新
      let nextNotes = notes?.slice().filter((note: any) => {
        return _id !== note._id;
      });
      setNotes(nextNotes);

      // 削除されたIDが現在のIDなら、一番上のノートを開く
      if (_id === nowNoteId)
        setNowNoteId(notes.length ? notes[0]._id : '');
      
      console.log('deleteNote():', 'success');
    }
    fetchDelete();
  }

  return (
    <div className='sidebar'
      style={{display: visibleSidebar? '' : 'none'}}
    >
      {console.log('[Sidebar]', 'rendering')}
      {/* ヘッダー */}
      <div className='sidebar-header'>
        {/* left */}
        <div className='sidebar-header-left'>
          <div className='sidebar-header-username'>
            <div className='sidebar-header-username-text'>
              ○○さんのNotion
            </div>
          </div>
        </div>
        {/* right */}
        <div className='sidebar-header-right'>
          <div
            className='sidebar-header-sidebar-button'
            onClick={() => setVisibleSidebar(!visibleSidebar)}
          >
            <div className='sidebar-header-sidebar-button-icon'>
              <svg viewBox="0 0 14 14">
                <path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 本体 */}
      <div className='sidebar-main'>
        {/* ノート一覧 */}
        <div className='sidebar-main-notes'>
          {notes.map((note: any, i: number) => (
            <NoteItem
              key={i}
              note={note}
              nowNoteId={nowNoteId}
              setNowNoteId={setNowNoteId}
              deleteNote={deleteNote}
            />
          ))}
        </div>

        {/* ノート新規作成 */}
        <div
          className='sidebar-main-new-note'
          onClick={createNote}
        >
          <div className='sidebar-main-new-note-icon'>
            <svg viewBox="0 0 16 16">
              <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z" />
            </svg>
          </div>
          <div className='sidebar-main-new-note-text'>
            Add a page
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
