import { arrayMoveImmutable, arrayMoveMutable } from 'array-move';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';
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

  const onDrop = (dropResult: DropResult) => {
    const {removedIndex, addedIndex } = dropResult;
    let newBody = arrayMoveImmutable(nowNote.body, removedIndex || 0, addedIndex || 0);
    setNowNote({...nowNote, body: newBody});
  }

  return (
    <div className='content-main-body'>
      <Container
        dragHandleSelector='.content-main-body-line-move-button'
        lockAxis='y'
        onDrop={onDrop}
      >
        {nowNote.body.map((line: any, i: number) => (
          <Draggable key={i}>
            <Line
              key={i}
              index={i}
              line={line}
              
              nowNote={nowNote}
              setNowNote={setNowNote}
              
              refs={refs}
              setFocusLineIndex={setFocusLineIndex}
            />
          </Draggable>
        ))}
      </Container>
    </div>
  );
};

export default Body;
