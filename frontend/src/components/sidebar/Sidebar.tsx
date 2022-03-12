import React from 'react';

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
          
          <div className='sidebar-main-notes-item'>
            <div className='sidebar-main-notes-item-icon'>
              <svg viewBox="0 0 30 30"><path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path></svg>
            </div>
            <div className='sidebar-main-notes-item-text' placeholder='無題'>
              note1
            </div>
            <div className='sidebar-main-notes-item-menu-icon'>
            <svg viewBox="0 0 14 14">
              <path d="M13.5000308,3.23952 C13.5000308,4.55848168 11.9230308,12.0493 11.9230308,12.0782 C11.9230308,12.6571 9.73825083,14 7.04165083,14 C4.34504083,14 2.16025083,12.6571 2.16025083,12.0782 C2.16025083,12.0541 0.5,4.55799105 0.5,3.23952 C0.5,1.91780104 3.02713083,0 7.03525083,0 C11.0433308,0 13.5000308,1.9178004 13.5000308,3.23952 Z M7,2 C3.625,2 2.5,3.25 2.5,4 C2.5,4.75 3.625,6 7,6 C10.375,6 11.5,4.75 11.5,4 C11.5,3.25 10.375,2 7,2 Z" />
            </svg>
            </div>
          </div>

          <div className='sidebar-main-notes-item'>
            <div className='sidebar-main-notes-item-icon'>
              <svg viewBox="0 0 30 30"><path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path></svg>
            </div>
            <div className='sidebar-main-notes-item-text' placeholder='無題'>
              
            </div>
            <div className='sidebar-main-notes-item-menu-icon'>
            <svg viewBox="0 0 14 14">
              <path d="M13.5000308,3.23952 C13.5000308,4.55848168 11.9230308,12.0493 11.9230308,12.0782 C11.9230308,12.6571 9.73825083,14 7.04165083,14 C4.34504083,14 2.16025083,12.6571 2.16025083,12.0782 C2.16025083,12.0541 0.5,4.55799105 0.5,3.23952 C0.5,1.91780104 3.02713083,0 7.03525083,0 C11.0433308,0 13.5000308,1.9178004 13.5000308,3.23952 Z M7,2 C3.625,2 2.5,3.25 2.5,4 C2.5,4.75 3.625,6 7,6 C10.375,6 11.5,4.75 11.5,4 C11.5,3.25 10.375,2 7,2 Z" />
            </svg>
            </div>
          </div>

          <div className='sidebar-main-notes-item'>
            <div className='sidebar-main-notes-item-icon'>
              <svg viewBox="0 0 30 30"><path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path></svg>
            </div>
            <div className='sidebar-main-notes-item-text' placeholder='無題'>
              note1
            </div>
            <div className='sidebar-main-notes-item-menu-icon'>
            <svg viewBox="0 0 14 14">
              <path d="M13.5000308,3.23952 C13.5000308,4.55848168 11.9230308,12.0493 11.9230308,12.0782 C11.9230308,12.6571 9.73825083,14 7.04165083,14 C4.34504083,14 2.16025083,12.6571 2.16025083,12.0782 C2.16025083,12.0541 0.5,4.55799105 0.5,3.23952 C0.5,1.91780104 3.02713083,0 7.03525083,0 C11.0433308,0 13.5000308,1.9178004 13.5000308,3.23952 Z M7,2 C3.625,2 2.5,3.25 2.5,4 C2.5,4.75 3.625,6 7,6 C10.375,6 11.5,4.75 11.5,4 C11.5,3.25 10.375,2 7,2 Z" />
            </svg>
            </div>
          </div>

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
