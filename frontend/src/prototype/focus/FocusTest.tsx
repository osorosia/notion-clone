import React, { createRef, lazy, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';



const Line = (props: any) => {
  const {
    text,
    useref,
  } = props;

  return (
    <div>
      <div
        contentEditable
        suppressContentEditableWarning
        ref={useref}
      >
        {text}
      </div>
    </div>
  );
};

const FocusTest = () => {

  const [focusLine, setFocusLine] = useState<number>(0);
  const [ls, setLs] = useState([
    'a',
    'b',
    'c',
  ]);

  const refs = useRef(new Array(ls.length));

  const handleClick = () => {
    refs.current[focusLine].focus();
    setFocusLine((focusLine + 1) % ls.length);
  };

  const handleClickAddLine = () => {
    setLs([...ls, 'line']);
  };

  return (
    <div>
      <button
        onClick={handleClick}
      >
        active
      </button>

      <button
        onClick={handleClickAddLine}
      >
        add line
      </button>
      {console.log('rendering -----------------------')}
      {ls.map((text, i) => (
        // <Line
        //   key={i}
        //   useref={listRefs.current[i]}
        //   text={text}
        // />
        <div
          contentEditable
          suppressContentEditableWarning
          ref={el => refs.current[i] = el}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default FocusTest;
