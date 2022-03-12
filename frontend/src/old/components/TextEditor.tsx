import React from 'react';
import './TextEditor.scss';

type Props = {
  text: string;
};

const TextEditor = (props: Props) => {
  const {
    text,
  } = props;

  return (
    <div className='text-editor'>
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        placeholder='入力してください'
      >
        {text}
      </div>
    </div>
  );
};

export default TextEditor;
