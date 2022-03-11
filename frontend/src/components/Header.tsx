import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header = (props: any) => {
  const setVisibleSidebar = props.setVisibleSidebar;
  const visibleSidebar = props.visibleSidebar;
  const nowNote = props.nowNote;

  return (
    <div>
      <button
        onClick={() => setVisibleSidebar(!visibleSidebar)}
        style={{display: 'inline-block'}}
      >
        <MenuOutlinedIcon />
      </button>
      <p style={{display: 'inline-block'}}>{nowNote.title}</p>
    </div>
  );
};

export default Header;
