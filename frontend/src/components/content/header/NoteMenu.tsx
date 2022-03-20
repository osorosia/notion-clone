import React from 'react';
import { Menu, MenuItem, SubMenu, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import axios from '../../../axios';
import { fetchDeleteNote } from '../../../fetch';

const LinkCopyButton = () => {
  return (
    <div>
      リンクをコピー
    </div>
  );
}

const DeleteNoteButton = () => {
  return (
    <div>
      削除
    </div>
  );
}

const NoteMenuButton = () => {
  return (
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
  );
}

const NoteMenu = (props: any) => {
  const {
    nowNoteId,
    setNowNoteId,

    notes,
    setNotes,
  } = props;

  const handleLinkCopy = () => {
    console.log(window.location.href);
    navigator.clipboard.writeText(window.location.href);
  };

  const handleDeleteNote = () => {
    const _id = nowNoteId;
    let nextNotes = notes?.slice().filter((note: any) => {
      return _id !== note._id;
    });
    setNotes(nextNotes);
    setNowNoteId('');

    fetchDeleteNote(_id);
  }

  return (
    <div>
      <Menu
        menuButton={<MenuButton><NoteMenuButton /></MenuButton>}
      >
        <MenuItem onClick={handleLinkCopy}><LinkCopyButton /></MenuItem>
        <MenuItem onClick={handleDeleteNote}><DeleteNoteButton /></MenuItem>
      </Menu>
    </div>
  );
};

export default NoteMenu;
