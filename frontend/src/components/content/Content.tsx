import React from 'react';

const Content = () => {
  return (
    <div className='content'>
      {/* ヘッダー */}
      <div className='content-header'>
        <div className='content-header-left'>
          {/* サイドバー開閉ボタン */}
          <div className='content-header-sidebar-button'>
            <div className='content-header-sidebar-button-icon'>
              <svg viewBox="0 0 14 14">
                  <path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z" />
              </svg>
            </div>
          </div>
          <div className='content-header-title'>
            <div className='content-header-title-text'>
              header-title
            </div>
          </div>
        </div>
        <div className='content-header-right'>
          <div className='content-header-menu-button'>
            <div className='content-header-menu-button-icon'>
              <svg viewBox="0 0 13 3">
                <g>
                  <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z" />
                  <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z" />
                  <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* メイン */}
      <div className='content-main'>
        {/* タイトル */}
        <div className='content-main-title'>
          <div
            className='content-main-title-text-editor'
            contentEditable
            suppressContentEditableWarning
            placeholder='無題'
          >
            title
          </div>
        </div>
        {/* ボディ */}
        <div className='content-main-body'>
          {/* 1行分 */}
          <div className='content-main-body-line'>
            {/* 左 */}
            <div className='content-main-body-line-left'>

              {/* 追加ボタン */}
              <div className='content-main-body-line-add-button'>
                <div className='content-main-body-line-add-button-icon'>
                  <svg viewBox="0 0 16 16">
                    <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z" />
                  </svg>
                </div>
              </div>
              {/* 移動ボタン */}
              <div className='content-main-body-line-move-button'>
                <div className='content-main-body-line-add-button-icon'>
                  <svg viewBox="0 0 10 10">
                    <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 中央 */}
            <div className='content-main-body-line-center'>
              {/* エディタ領域 */}
              <div
                className='content-main-body-line-text-editor'
                contentEditable
                suppressContentEditableWarning
                placeholder='テキストを入力してください'
              >
                aaaaaaaaa
              </div>
            </div>

            {/* 右 */}
            <div className='content-main-body-line-right'>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Content;
