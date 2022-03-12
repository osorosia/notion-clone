import React from 'react';
import NoteItem from './note/NoteItem';

const Sidebar = (props: any) => {
  const {
    notes,
    visibleSidebar,
    setVisibleSidebar,
  } = props;

  return (
    <div className='sidebar'
      style={{display: visibleSidebar? '' : 'none'}}
    >
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
          {notes.map((note: any, index: any) => (
            <NoteItem note={note} index={index} />
          ))}
        </div>

        {/* ノート新規作成 */}
        <div className='sidebar-main-new-note'>
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
