import { boxBtn } from './formsBtn.js';
import AbstractForm from './classParent.js';
import WindowForm from './window.js';
import { containers } from './container.js';
import state from './keyboardState.js';

const windows = new WindowForm(containers.element);

class Btns extends AbstractForm {
  constructor(body, className, textContent, buttonInfo) {
    super(body, 'div', className);
    this.element.textContent = textContent;
    this.element.onclick = (e) => {
      this.onClick(e);
    };
    this.buttonInfo = buttonInfo;
  }
}

const arr = [];

function createButton(code, caption, className, controller, buttonInfo) {
  const btn = new Btns(boxBtn.element, className, caption, buttonInfo);
  arr.push(btn);
  const down = (e) => {
    btn.element.classList.add('active');
    controller.down(e);
  };
  const up = (e) => {
    btn.element.classList.remove('active');
    controller.up(e);
  };
  btn.onClick = (e) => {
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

export default function ruCreate(bts, currentLang, onCombo) {
  const pressed = {};
  const buttons = [];
  for (let i = 0; i < bts.length; i += 1) {
    const data = bts[i];
    const checking = () => {
      const name = data.contents[currentLang];
      let style = 'btn';
      if (name === 'пробел' || name === 'space') {
        style = 'space';
      } else if (name === 'Caps Lock' || name === 'Shift' || name === 'Enter' || name === 'Backspace' || name === 'Tab') {
        style = 'caps';
      } else if (name === 'lang') {
        style = 'lang';
      } else if (name === 'Для переключения языка используйте комбинацию клавиш Shift + Alt или кнопку "lang"') {
        style = 'information';
      }
      return { name, style };
    };

    const { name, style } = checking(data, currentLang);
    const filter = (names) => {
      if (names === 'пробел' || names === 'space') {
        return ' ';
      } if (names === 'Caps Lock' || names === 'CapsLock' || names === 'Shift' || names === 'Enter' || names === 'Backspace' || names === 'Tab') {
        return '';
      } if (names === 'Alt' || names === 'DEL' || names === 'Ctrl') {
        return '';
      }
      if (names === 'lang') {
        return '';
      }
      if (names === 'ArrowUp' || names === 'ArrowLeft' || names === 'ArrowRight' || names === 'ArrowDown') {
        return data.contents[currentLang];
      }
      return names;
    };
    const button = createButton(data.values, name, style, {

      down: (e) => {
        const printed = filter(('key' in e) ? data.contents[currentLang]
          : e.target.innerText);
        if (state.capslog) {
          windows.element.innerHTML += printed.toUpperCase();
        } else {
          windows.element.innerHTML += printed.toLowerCase();
        }
        if (data.values === 'Enter') {
          windows.element.innerHTML += '\n';
        }
        if (data.values === 'Enter') {
          windows.element.innerHTML += '\n';
        }
        if (data.values === 'ControlLeft' || data.values === 'ControlRight') {
          windows.element.innerHTML = '';
        }
        pressed[data.values] = true;
        onCombo({ ...pressed });
      },
      up: () => {
        pressed[data.values] = false;
      },
    }, data);
    buttons.push(button);
  }
  return {
    destroer: () => {
      buttons.forEach((destroy) => {
        destroy();
      });
    },
    buttons: arr,
  };
}
