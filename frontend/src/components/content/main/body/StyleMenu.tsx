import axios from '../../../../axios';
import React, { useEffect, useState } from 'react';
import '../../../../style/StyleMenu.scss'

const StyleMenu = (props: any) => {
  const {
    nowNote,
    setNowNote,
    index,
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

  const setStyle = (style: string) => {
    let newBody = nowNote.body.slice();
    if (style === newBody[index].style)
      newBody[index].style = '';
    else
      newBody[index].style = style;
    setNowNote({...nowNote, body: newBody});

    const fetchUpdate = async () => {
      const url = `/api/note/update?_id=${nowNote._id}`;
      const params = { body: newBody };
      const res = await axios.put(url, params);
      const json = res.data;

      console.log('DB', json.result);
    }
    fetchUpdate();
  }
  
  const setFont = (font: string) => {
    let newBody = nowNote.body.slice();
    if (newBody[index].font.indexOf(font) !== -1)
      newBody[index].font = newBody[index].font.slice().filter((str: string) => {
        return str !== font;
      });
    else
      newBody[index].font.push(font);
    setNowNote({...nowNote, body: newBody});

    const fetchUpdate = async () => {
      const url = `/api/note/update?_id=${nowNote._id}`;
      const params = { body: newBody };
      const res = await axios.put(url, params);
      const json = res.data;

      console.log('DB', json.result);
    }
    fetchUpdate();
  }

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
            <div className='style-menu-box-item' onClick={() => setStyle('')}>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/text.9fdb530b.png" />
              </div>
              テキスト
            </div>

            <div className='style-menu-box-item' onClick={() => setStyle('h1')}>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/header.57a7576a.png" />
              </div>
              見出し1
            </div>

            <div className='style-menu-box-item' onClick={() => setStyle('h2')}>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/subheader.9aab4769.png" />
              </div>
              見出し2
            </div>

            <div className='style-menu-box-item' onClick={() => setStyle('h3')}>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png" />
              </div>
              見出し3
            </div>

            <div className='style-menu-box-item' onClick={() => setStyle('code')}>
              <div className='style-menu-box-item-icon'>
                <img src="https://www.notion.so/images/blocks/code.a8b201f4.png" />
              </div>
              コード
            </div>
            
            <div className='style-menu-box-fontbox'>
              <div className='style-menu-box-fontbox-item bold' onClick={() => setFont('bold')}>B</div>
              <div className='style-menu-box-fontbox-item italic' onClick={() => setFont('italic')}>i</div>
              <div className='style-menu-box-fontbox-item underline' onClick={() => setFont('underline')}>U</div>
              <div className='style-menu-box-fontbox-item strike' onClick={() => setFont('strike')}>S</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleMenu;
