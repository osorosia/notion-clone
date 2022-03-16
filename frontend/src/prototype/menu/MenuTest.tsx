import React from 'react'
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const MenuTest = () => {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };
  

  return (
    <div
      style={style}
    >
      <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <SubMenu label="Open">
          <MenuItem>mebee</MenuItem>
          <MenuItem>about</MenuItem>
          <MenuItem>policy</MenuItem>
        </SubMenu>
        <MenuItem>Save</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuTest;
