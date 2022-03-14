import React, { useState, ReactElement } from "react";
import { Box, TextField } from "@material-ui/core/";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { arrayMoveImmutable } from "array-move";

const DragTest = () => {
  const [items, setItems] = useState([
    {
      content: <TextField label="TextField 1" variant="outlined" />,
    },
    {
      content: <TextField label="TextField 2" variant="outlined" />,
    },
    {
      content: <TextField label="TextField 3" variant="outlined" />,
    },
  ]);

  const onDrop = (dropResult: DropResult) => { // `DropResult` で型定義
    const { removedIndex, addedIndex } = dropResult;
    setItems((itemsArray) => {
      const arr = arrayMoveImmutable(itemsArray, removedIndex || 0, addedIndex || 0);
      console.log(arr);
      return arr;
    });
  };

  return (
    <Container
      dragHandleSelector=".dragHandleSelector" // ドラッグ用コンポーネントのセレクタを指定
      lockAxis="y" // 軸の固定を指定
      onDrop={onDrop} // ドラッグ時に呼ばれる関数、dropResult が渡る
    >
      {items.map(({ content }, i) => {
        return (
          <Draggable key={`DraggableInputContainer-${i}`}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="8px"
            >
              {content}
              <DragHandleIcon className="dragHandleSelector"/>
            </Box>
          </Draggable>
        );
      })}
    </Container>
  );
};

export default DragTest;
