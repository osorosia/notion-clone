import React, { useRef } from 'react';
import './Title.scss';

type Props = {
  id: string;
  title: string;
  onChangeTitle: any; 
};

const Title = (props: Props) => {
  const {
    id,
    title,
    onChangeTitle,
  } = props;

  const handleInput = (e: any) => {
    console.log('edit title =>', e.target.innerHTML);
    const nextTitle = e.target.innerHTML;
    onChangeTitle(id, nextTitle);
  };

  return (
    <div
      contentEditable={true}
      suppressContentEditableWarning={true}
      className='title'
      onInput={handleInput}
    >
      {title}
    </div>
  );
};

export default Title;
