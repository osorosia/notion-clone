import React, { useContext } from 'react';
import { NoteContext } from '../Home';
import Header from './Header';
import Line from './Line';

const Content = (props: any) => {
  const {
    visibleSidebar,
    setVisibleSidebar,
  } = props;

  const {nowNote, dispatch} = useContext(NoteContext);

  const handleInputTitle = (e: any) => {
    console.log(e.target);
  };

  const handleKeyPressTitle = (e: any) => {
    if (e.key === 'Enter')
      return e.preventDefault();
  };

  return (
    <div className='content'>
      {console.log('[Content]', 'rendering')}
      {/* ヘッダー */}
      <Header
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
        nowNote={nowNote}
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
