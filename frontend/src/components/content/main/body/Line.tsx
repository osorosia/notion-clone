import React, { useMemo, useState } from 'react';
import axios from 'axios';

const Line = (props: any) => {
  const {
    index,
    line,
    nowNote,
    setNowNote,
  } = props;
  
  const { text } = line;

  const [visibleButton, setVisibleButton] = useState(false);

  // テキストを入力したとき
  const handleInput = (e: any) => {
    const fetchUpdate = async () => {
      const userInput = e.target.innerHTML;
      console.log(userInput);
      nowNote.body[index].text = userInput;
      
      const url = `http://localhost:8080/api/note/update?_id=${nowNote._id}`;
      const params = { body: nowNote.body };
      const res = await axios.put(url, params);
      const json = res.data;

      console.log('DB', json.result)
      if (json.result === 'ng')
        return;
    };
    fetchUpdate();
  };

  const addNewLine = () => {
    const fetchUpdate = async () => {
      // 現在のノートを更新
      let newBody = nowNote.body.slice();
      newBody.splice(index + 1, 0, {text: ''});
      setNowNote({...nowNote, body: newBody});
      
      const url = `http://localhost:8080/api/note/update?_id=${nowNote._id}`;
      const params = { body: newBody };
      const res = await axios.put(url, params);
      const json = res.data;

      console.log(json.result);
      if (json.result === 'ng')
        return;
    };
    fetchUpdate();
  }

  const handleKeyPress = (e: any) => {
    // 下に1行挿入
    if (!e.shiftKey && e.key === 'Enter') {
      // 1行を下に挿入
      addNewLine();
      // フォーカスを1行下に当てる
      
      return e.preventDefault();
    }
  };

  // 1行追加
  const handleClickAdd = () => {
    addNewLine();
  };

  const handleKeyDown = (e: any) => {  
    // 文字列が空ならブロック削除
    if (e.key === 'Backspace' || e.key === 'Delete')
      console.log(e.key);
  }

  return (
    <div
      className='content-main-body-line'
      onMouseOver={() => setVisibleButton(true)}
      onMouseOut={() => setVisibleButton(false)}
    >
      {console.log('[Line]', 'rendering')}
      {/* 左 */}
      <div className='content-main-body-line-left'>

        {/* スタイルボタン */}
        {/* TODO */}
        
        {/* 追加ボタン */}
        <div
          className='content-main-body-line-add-button'
          style={{display: visibleButton ? '' : 'none'}}
          onClick={handleClickAdd}
        >
          <div className='content-main-body-line-add-button-icon'>
            <svg viewBox="0 0 16 16">
              <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z" />
            </svg>
          </div>
        </div>
        
        {/* 移動ボタン */}
        <div className='content-main-body-line-move-button'
          style={{display: visibleButton ? '' : 'none'}}
        >
          <div className='content-main-body-line-add-button-icon'>
            <svg viewBox="0 0 10 10">
              <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z" />
            </svg>
          </div>
        </div>

      </div>

      {/* 中央 */}
      <div className='content-main-body-line-center'>
        <div
          className='content-main-body-line-text-editor'
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          placeholder='テキストを入力してください'
          dangerouslySetInnerHTML={{ __html: text}}
        />
      </div>

      {/* 右 */}
      <div className='content-main-body-line-right' />
    </div>
  );
};

export default Line;
