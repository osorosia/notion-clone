import React from 'react';
import axios from 'axios';

const Title = (props: any) => {
  const {
    notes,
    setNotes,
    
    nowNoteId,
    setNowNoteId,
    
    nowNote,
    setNowNote,

    nowNoteTitle,
    setNowNoteTitle,
  } = props;
  
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
  );
};

export default Title;