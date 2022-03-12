import React from 'react';

const NoteItem = (props: any) => {
  const {
    note,
    deleteNote,
  } = props;

  return (
    <div className='sidebar-main-notes-item'>
      <div className='sidebar-main-notes-item-icon'>
        <svg viewBox="0 0 30 30">
          <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z" />
        </svg>
      </div>
      <div className='sidebar-main-notes-item-text' placeholder='無題'>
        {note.title}
      </div>

      {/* 削除ボタン */}
      <div
        className='sidebar-main-notes-item-menu-icon'
        onClick={() => deleteNote(note._id)}
      >
        <svg viewBox="0 0 14 14">
          <path d="M13.5000308,3.23952 C13.5000308,4.55848168 11.9230308,12.0493 11.9230308,12.0782 C11.9230308,12.6571 9.73825083,14 7.04165083,14 C4.34504083,14 2.16025083,12.6571 2.16025083,12.0782 C2.16025083,12.0541 0.5,4.55799105 0.5,3.23952 C0.5,1.91780104 3.02713083,0 7.03525083,0 C11.0433308,0 13.5000308,1.9178004 13.5000308,3.23952 Z M7,2 C3.625,2 2.5,3.25 2.5,4 C2.5,4.75 3.625,6 7,6 C10.375,6 11.5,4.75 11.5,4 C11.5,3.25 10.375,2 7,2 Z" />
        </svg>
      </div>
    </div>
  );
};

export default NoteItem;
