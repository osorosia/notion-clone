import React from 'react';
import SidebarSwitchButton from './SidebarSwitchButton';

const Header = (props: any) => {
  const {
    nowNoteTitle,
    setNowNoteTitle,
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
        <div className='content-header-menu-button'>
          <div className='content-header-menu-button-icon'>
            <svg viewBox="0 0 13 3">
              <g>
                <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z" />
                <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z" />
                <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z" />
              </g>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
