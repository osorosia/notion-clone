import React from 'react'
import Button from '@material-ui/core/Button';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export const Note = () => {
  return (
    <div>      
      <Sidebar />
      <Header />
      <Button>
        Hello
      </Button>
    </div>
  )
};
