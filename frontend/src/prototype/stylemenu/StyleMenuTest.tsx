import React from 'react';
import './style.scss';

const StyleMenuTest = () => {
  return (
    <div className='proto-style-menu'>
      <div className='proto-style-menu-left' />
      <div className='proto-style-menu-center'>
        <div className='proto-style-menu-box'>
          <div className='proto-style-menu-box-item'>
            <div className='proto-style-menu-box-item-icon'>
              <img src="https://www.notion.so/images/blocks/text.9fdb530b.png" />
            </div>
            テキスト
            {/* <svg viewBox="0 0 30 30">
              <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 " />
            </svg> */}
          </div>

          <div className='proto-style-menu-box-item'>
            <div className='proto-style-menu-box-item-icon'>
              <img src="https://www.notion.so/images/blocks/header.57a7576a.png" />
            </div>
            見出し1
          </div>

          <div className='proto-style-menu-box-item'>
            <div className='proto-style-menu-box-item-icon'>
              <img src="https://www.notion.so/images/blocks/subheader.9aab4769.png" />
            </div>
            見出し2
          </div>

          <div className='proto-style-menu-box-item'>
            <div className='proto-style-menu-box-item-icon'>
              <img src="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png" />
            </div>
            見出し3
          </div>

          <div className='proto-style-menu-box-item'>
            <div className='proto-style-menu-box-item-icon'>
              <img src="https://www.notion.so/images/blocks/code.a8b201f4.png" />
            </div>
            コード
          </div>
          
          <div className='proto-style-menu-box-fontbox'>
            <div className='proto-style-menu-box-fontbox-item bold'>B</div>
            <div className='proto-style-menu-box-fontbox-item italic'>i</div>
            <div className='proto-style-menu-box-fontbox-item underline'>U</div>
            <div className='proto-style-menu-box-fontbox-item strike'>S</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StyleMenuTest;
