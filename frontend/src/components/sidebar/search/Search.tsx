import React, { useEffect, useState } from 'react'
import { Note } from '../../Home';
import './Search.scss';

const ResultNoteItem = (props: any) => {
  const {
    resultNote,
    setNowNoteId,
    switchShow,
  } = props;

  const handleClick = () => {
    setNowNoteId(resultNote._id);
    switchShow();
  };

  return (
    <div
      className='search-modal-window-result-note'
      onClick={handleClick}
    >
      <div className='search-modal-window-result-note-icon'>
        <svg viewBox="0 0 30 30">
          <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z" />
        </svg>
      </div>
      <div className='search-modal-window-result-note-text'>
        {resultNote.title}
      </div>
    </div>
  );
};

const SearchModalWindow = (props: any) => {
  const {
    switchShow,

    notes,
    setNotes,

    nowNoteId,
    setNowNoteId,
  } = props;

  // 検索ワード
  const [searchWord, setSearchWord] = useState<string>('');
  // 検索結果
  const [resultNotes, setResultNotes] = useState<Note[]>([]);

  // 検索ワードが入力されたら検索結果を出す
  useEffect(() => {
    if (searchWord === '')
      return setResultNotes([]);
    const results = notes.slice().filter((ele: any, i: number, arr: any) => {
      return ele.title.indexOf(searchWord) >= 0;
    });
    setResultNotes(results);
  }, [searchWord]);

  const handleInput = (e: any) => {
    const userInput = e.target.innerHTML;
    setSearchWord(userInput);
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter')
      return e.preventDefault();
  } 

  return (
    <div id='overlay' onClick={switchShow}>
      <div className='search-modal-window' onClick={(e) => e.stopPropagation()}>
        {/* 検索ワード入力 */}
        <div className='search-modal-window-input'>
          {/* 虫眼鏡アイコン */}
          <div className='search-modal-window-input-icon'>
            <svg viewBox="0 0 17 17">
              <path d="M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z" />
            </svg>
          </div>
          {/* 検索ワード入力欄 */}
          <div
            className='search-modal-window-input-textbox'
            contentEditable
            suppressContentEditableWarning
            placeholder='○○さんのNotionを検索する...'
            onInput={handleInput}
            onKeyPress={handleKeyPress}
          />
        </div>
        
        {/* 検索結果 */}
        <div
          className='search-modal-window-result'
          style={{display: resultNotes.length > 0 ? '' : 'none'}}
        >
          {resultNotes.map((note, i) => (
            <ResultNoteItem
              key={i}
              resultNote={note}
              setNowNoteId={setNowNoteId}
              switchShow={switchShow}
            />
          ))}
        </div>

        {/* 検索結果がない */}
        <div
          className='search-modal-window-non-result'
          style={{display: searchWord !== '' && resultNotes.length === 0 ? '' 
            : 'none' }}
        >
          <div>
            <p>該当なし</p>
            <p>別のキーワードで検索してみましょう</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Search = (props: any) => {
  const {
    notes,
    setNotes,
    nowNoteId,
    setNowNoteId,
  } = props;

  // 検索モーダルウィンドウ
  const [showSearch, setShowSearch] = useState<boolean>(false);

  // 検索モーダルウィンドウの表示切り替え
  const switchShow = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div
      className='sidebar-main-feature-search'
      onClick={() => setShowSearch(!showSearch)}
    >
      <div className='sidebar-main-feature-search-icon'>
        <svg viewBox="0 0 14 14">
          <path d="M5.92239093,0.540000021 C2.94055203,0.540000021 0.5,2.98052217 0.5,5.96238099 C0.5,8.9442199 2.94055203,11.384762 5.92239093,11.384762 C7.02329179,11.384762 8.05258749,11.0564678 8.91032559,10.4866744 L12.1460745,13.6802311 C12.5695899,14.1037465 13.2589477,14.1037465 13.6823635,13.6802311 C14.1058788,13.2567158 14.1058788,12.5730353 13.6823635,12.1495199 L10.4410368,8.95033558 C11.0107904,8.09259747 11.3447619,7.06329182 11.3447619,5.96238099 C11.3447619,2.98052217 8.90420992,0.540000021 5.92239093,0.540000021 Z M5.92239093,2.70895241 C7.7320027,2.70895241 9.17580956,4.15272939 9.17580956,5.96238099 C9.17580956,7.77201268 7.7320027,9.21581954 5.92239093,9.21581954 C4.11275925,9.21581954 2.66895239,7.77201268 2.66895239,5.96238099 C2.66895239,4.15272939 4.11275925,2.70895241 5.92239093,2.70895241 Z" />
        </svg>
      </div>
      <div className='sidebar-main-feature-search-text'>
        検索
      </div>
      {showSearch ? 
        <SearchModalWindow
          switchShow={switchShow}

          notes={notes}
          setNotes={setNotes}
          nowNoteId={nowNoteId}
          setNowNoteId={setNowNoteId}
        /> 
        : <div />
      }
    </div>
  );
};

export default Search;
