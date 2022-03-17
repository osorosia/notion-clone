import React, { useEffect, useState } from 'react';
import '../../../../style/StyleMenu.scss'

const StyleMenu = (props: any) => {
  const {
    showStyleMenu,
    switchStyleMenu,
    pos,
  } = props;
  const { top, left } = pos;

  const [menuPos, setMenuPos] = useState({top: top, left: left});

  useEffect(() => {
    console.log(top, left);
    setMenuPos({top: top, left: left});
  }, [showStyleMenu]);

  const style = {
    top: menuPos.top - 50,
    left: menuPos.left - 50,
  }

  return (
    <div className='overlay-style-menu'
      onClick={() => switchStyleMenu()}
    >
      <div className='style-menu'
        style={style}
        >
        <div className='style-menu-left' />
        <div className='style-menu-center'
        >
          <div className='style-menu-box'>
            <div className='style-menu-box-item' onClick={() => console.log('aaaaaaaaa')}>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/text.9fdb530b.png" />
              </div>
              テキスト
              {/* <svg viewBox="0 0 30 30">
                <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 " />
              </svg> */}
            </div>

            <div className='style-menu-box-item'>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/header.57a7576a.png" />
              </div>
              見出し1
            </div>

            <div className='style-menu-box-item'>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/subheader.9aab4769.png" />
              </div>
              見出し2
            </div>

            <div className='style-menu-box-item'>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png" />
              </div>
              見出し3
            </div>

            <div className='style-menu-box-item'>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/code.a8b201f4.png" />
              </div>
              コード
            </div>
            
            <div className='style-menu-box-fontbox'>
              <div className='style-menu-box-fontbox-item bold'>B</div>
              <div className='style-menu-box-fontbox-item italic'>i</div>
              <div className='style-menu-box-fontbox-item underline'>U</div>
              <div className='style-menu-box-fontbox-item strike'>S</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleMenu;
