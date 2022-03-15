import React from 'react'

const SidebarSwitchButton = (props: any) => {
  const {
    visibleSidebar,
    setVisibleSidebar,
  } = props;

  const handleClick = () => {
    setVisibleSidebar(!visibleSidebar);
  }

  return (
    <div
      className='content-header-sidebar-button'
      style={{display: visibleSidebar ? 'none' : ''}}
      onClick={handleClick}
    >
      <div className='content-header-sidebar-button-icon'>
        <svg viewBox="0 0 14 14">
            <path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z" />
        </svg>
      </div>
    </div>
  );
};

export default SidebarSwitchButton;
