import React from 'react';
import NoteMenu from './NoteMenu';
import SidebarSwitchButton from './SidebarSwitchButton';

const Header = (props: any) => {
  const {
    notes,
    setNotes,

    nowNoteTitle,
    setNowNoteTitle,

    nowNoteId,
    setNowNoteId,

    visibleSidebar,
    setVisibleSidebar,
  } = props;

  return (
    <div className='content-header'>
      {/* 左側 */}
      <div className='content-header-left'>
        {/* サイドバー開閉ボタン */}
        <SidebarSwitchButton
          visibleSidebar={visibleSidebar}
          setVisibleSidebar={setVisibleSidebar}
        />
        {/* ノートのタイトル */}
        <div className='content-header-title'>
          <div className='content-header-title-text' placeholder='無題'>
            {nowNoteTitle}
          </div>
        </div>
      </div>

      {/* 右側 */}
      <div className='content-header-right'>
        {/* メニューボタン */}
        <NoteMenu
          notes={notes}
          setNotes={setNotes}

          nowNoteId={nowNoteId}
          setNowNoteId={setNowNoteId}
        />
      </div>
    </div>
  );
};

export default Header;
