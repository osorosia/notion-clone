import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from './old/Home';
import Home from './components/Home';
import Tmp from './prototype/Tmp';

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
          <Route path='/tmp' element={<Tmp />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
