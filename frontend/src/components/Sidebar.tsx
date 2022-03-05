import React from 'react';
import Drawer from '@material-ui/core/Drawer';

const First = () => {
  return (
    <React.Fragment>
      <p>hello</p>
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
