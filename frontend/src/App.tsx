import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from './old/Home';
import Home from './components/Home';
import DragTest from './prototype/drag/DragTest';
import DesignTest from './prototype/design/Design';

function App() {
  return (
    // <React.Fragment>
    //   <Tmp />
    // </React.Fragment>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
          {/* <Route path='/signin' element={<Signin />} /> */}
          <Route path='/design' element={<DesignTest />} />
          <Route path='/drag' element={<DragTest />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
