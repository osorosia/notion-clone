import React, { useState } from 'react';
import './style.scss';

const ModalTest = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/*  */}
      <button
        onClick={() => setShow(true)}
      >
        Click
      </button>

      {/* モーダルウィンドウ */}
      {show ? 
        <div id='overlay' onClick={() => setShow(false)}>
          <div id='content' onClick={(e) => e.stopPropagation()}>
            <p>This is Modal Window.</p>
            
            {/*  */}
            <p>
              <button onClick={() => setShow(false)}>
                close
              </button>
            </p>
          </div>
        </div>
      : <></>}

    </div>
  );
};

export default ModalTest;
