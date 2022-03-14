import React, { useState } from 'react';
import Line from './body/Line';

const Body = (props: any) => {
  const {
    nowNote,
    setNowNote,
  } = props;

  // 選択している行
  const [focusLineIndex, setFocusLineIndex] = useState<number>(-1);
  
  return (
    <div className='content-main-body'>
      {nowNote.body.map((line: any, i: number) => (
        <Line
          key={i}
          index={i}
          line={line}

          nowNote={nowNote}
          setNowNote={setNowNote}
        />
      ))}
    </div>
  );
};

export default Body;
