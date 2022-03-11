import React from 'react';
import './TextEditor.scss';

type Props = {
  text: string;
};

const TextEditor = (props: Props) => {
  return (
    <div>
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        placeholder='入力してください'
      >
        {props.text}
      </div>
    </div>
  );
};

export default TextEditor;
