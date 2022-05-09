import { boxBtn } from './formsBtn.js';
import AbstractForm from './classParent.js';
import WindowForm from './window.js';
import { containers } from './container.js';

import { capslog } from './index.js';
import { currentLang } from './index.js';
import { createKeys } from './index.js';

const windows = new WindowForm(containers.element);

class Btns extends AbstractForm {
  constructor(body, className, textContent, buttonInfo) {
    super(body, 'div', className);
    this.element.textContent = textContent;
    this.element.onclick = (e) => {
      this.onClick(e);
    };
    this.buttonInfo = buttonInfo
  }
}
let arr = []

function createButton(code, caption, className, controller, buttonInfo) {
  const btn = new Btns(boxBtn.element, className, caption, buttonInfo);

  arr.push(btn)
  const down = (e) => {
    btn.element.classList.add('active');
    controller.down(e);

  };
  const up = (e) => {
    btn.element.classList.remove('active');
    controller.up(e);
  };
  btn.onClick = (e) => {
    console.log(e)

    down(e);
    up(e);
  };
  const kde = (e) => {
    if (e.code === code) {
      e.preventDefault();
      down(e);
    }
  };
  document.addEventListener('keydown', kde);

  const kpe = (e) => {
    if (e.code === code) {
      e.preventDefault();
      up(e);
    }
  };
  document.addEventListener('keyup', kpe);

  return () => {
    document.removeEventListener('keydown', kde);
    document.removeEventListener('keyup', kpe);
    btn.destroy();
  };
}

export default function ruCreate(btn, currentLang, onCombo) {
  const pressed = {};
  const buttons = [];
  for (let i = 0; i < btn.length; i += 1) {
    const data = btn[i];

    function checking(data, currentLang) {
      const name = data.contents[currentLang];
      // const value = data.contentInput;
      let text = '';
      let style = 'btn';
      if (name === 'пробел' || name === 'space') {
        text = '';
        style = 'space';
      } else if (name === 'Caps Lock' || name === 'Shift' || name === 'Enter' || name === 'Backspace' || name === 'Tab') {
        text = '';
        style = 'caps';
      } else if (name === 'Alt' || name === 'DEL' || name === 'Ctrl') {
        text = '';
        // style = 'btn';
      } else if (name === 'lang') {
        text = '';
        style = 'lang';
      }
      return { name, style }
    }
    const { name, style } = checking(data, currentLang)
    function filter(name) {
      console.log(name)
      if (name === 'пробел' || name === 'space') {
        return ''
      } else if (name === 'Caps Lock' || name === 'CapsLock' || name === 'Shift' || name === 'Enter' || name === 'Backspace' || name === 'Tab') {
        return ''

      } else if (name === 'Alt' || name === 'DEL' || name === 'Ctrl') {
        return ''
      } else if (name === 'lang') {
        return ''

      }
      return name
    }
    // console.log(name);
    const button = createButton(data.values, name, style, {

      down: (e) => {
        // console.log('FDSFSD', e)

        let printed = filter(e.key || e.target.innerText);
        if (capslog) {
          windows.element.innerHTML += printed.toUpperCase();

        } else {
          windows.element.innerHTML += printed.toLowerCase();
        }
        if (data.values == 'Enter') {
          windows.element.innerHTML += '\n';

        }
        // console.log(printed)

        // windows.element.innerHTML += text.toLowerCase();

        pressed[data.values] = true;
        onCombo({ ...pressed });
      },
      up: (e) => {
        pressed[data.values] = false;
      },

    }, data);
    buttons.push(button);
    // console.log(data.values);
  }
  return arr
}
