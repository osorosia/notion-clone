import React from 'react';

const Header = (props: any) => {
  const {
    nowNoteTitle,
    setNowNoteTitle,
    visibleSidebar,
    setVisibleSidebar,
  } = props;

  return (
    <div className='content-header'>
      <div className='content-header-left'>
        {/* サイドバー開閉ボタン */}
        <div
          className='content-header-sidebar-button'
          style={{display: visibleSidebar ? 'none' : ''}}
          onClick={() => setVisibleSidebar(!visibleSidebar)}
        >
          <div className='content-header-sidebar-button-icon'>
            <svg viewBox="0 0 14 14">
                <path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z" />
            </svg>
          </div>
        </div>
        <div className='content-header-title'>
          <div className='content-header-title-text' placeholder='無題'>
            {nowNoteTitle}
          </div>
        </div>
      </div>
      <div className='content-header-right'>
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
