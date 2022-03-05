import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { ListItemButton } from '@mui/material';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import UpdateIcon from '@mui/icons-material/Update';
import SettingsIcon from '@mui/icons-material/Settings';

const First = () => {
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon><SearchIcon /></ListItemIcon>
        <ListItemText primary="検索" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon><UpdateIcon /></ListItemIcon>
        <ListItemText primary="更新一覧" />
      </ListItemButton>
      
      <ListItemButton>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary="設定" />
      </ListItemButton>
    </React.Fragment>
  );
}

const Second = () => {
  return (
    <React.Fragment>
      <p>hello</p>
    </React.Fragment>
  );
}

const Third = () => {
  return (
    <React.Fragment>
      <p>hello</p>
    </React.Fragment>
  );
}

const Sidebar = () => {
  return (
    <div>
      <Drawer anchor='left' variant='permanent'>
        <First />
        <Second />
        <Third />
      </Drawer>
    </div>
  );
};

export default Sidebar;
