import React, { useEffect, useRef, useState } from 'react';
import Line from './body/Line';

const Body = (props: any) => {
  const {
    nowNote,
    setNowNote,
  } = props;

  // 選択している行
  const [focusLineIndex, setFocusLineIndex] = useState<number>(0);

  const refs = useRef(new Array(nowNote.body.length));

  // フォーカス移動
  useEffect(() => {
    let index = focusLineIndex;
    if (index < 0)
      index = 0;
    if (index >= nowNote.body.length)
      index = nowNote.body.length - 1;

    refs.current[index].focus();

  }, [focusLineIndex]);

  return (
    <div className='content-main-body'>
      {nowNote.body.map((line: any, i: number) => (
        <Line
          key={i}
          index={i}
          line={line}

          nowNote={nowNote}
          setNowNote={setNowNote}
          
          refs={refs}
          setFocusLineIndex={setFocusLineIndex}
        />
      ))}
    </div>
  );
};

export default Body;
