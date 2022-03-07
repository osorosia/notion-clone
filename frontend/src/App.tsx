import React from 'react';
// import './App.css';
import './App.scss';
import { Note } from './Note';

function App() {
  return (
    <div className="App">
      {/* Sidebar------------------------------------------ */}
      <div className="side">
        <ul>
          <li>aaa</li>
          <li>bbbb</li>
          <li>ccccc</li>
        </ul>
        <ul>
          <li>aaa</li>
          <li>bbbb</li>
          <li>ccccc</li>
        </ul>
      </div>

      
      {/* Header------------------------------------------- */}

      
      {/* Main--------------------------------------------- */}
      <div className="content">
        <ul>
          <li>aaa</li>
          <li>bbbb</li>
          <li>ccccc</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
