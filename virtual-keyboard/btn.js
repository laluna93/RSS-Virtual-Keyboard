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
  // console.log(code);
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
  console.log(currentLang);

  const pressed = {};
  const buttons = [];
  for (let i = 0; i < bts.length; i += 1) {
    const data = bts[i];
    // console.log(btn);

    const checking = () => {
      const name = data.contents[currentLang];
      // const text = '';
      let style = 'btn';
      if (name === 'пробел' || name === 'space') {
        // text;
        style = 'space';
      } else if (name === 'Caps Lock' || name === 'Shift' || name === 'Enter' || name === 'Backspace' || name === 'Tab') {
        // text;
        style = 'caps';
      } else if (name === 'Alt' || name === 'DEL' || name === 'Ctrl') {
        // text;
      } else if (name === 'lang') {
        style = 'lang';
      } else if (name === 'Для переключения языка используйте комбинацию клавиш Shift + Alt') {
        style = 'spaces';
      }
      return { name, style };
    };

    const { name, style } = checking(data, currentLang);
    const filter = (names) => {
      // console.log(name);
      if (names === 'пробел' || names === 'space') {
        return '';
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
      } if (names === 'Для переключения языка используйте комбинацию клавиш Shift + Alt') {
        // style = 'spaces';
      }
      return names;
    };
    // console.log(name);
    const button = createButton(data.values, name, style, {

      down: (e) => {
        // const printed = filter(e.key || e.target.innerText);
        // const value = bts.find((el) => el.values === e.code).contents[currentLang];
        // if (e.target === e.currentTarget) {
        // }

        const printed = filter(('key' in e) ? data.contents[currentLang]
          : e.target.innerText);

        // console.log('key' in e);
        // if ('key' in e) {
        //   if (data.values === e.code) {
        //     console.log(data.contents[currentLang], e.code, currentLang);
        //   }
        //   // printed =
        //   // console.log(printed);
        // }

        if (state.capslog) {
          windows.element.innerHTML += printed.toUpperCase();
        } else {
          windows.element.innerHTML += printed.toLowerCase();
        }
        if (data.values === 'Enter') {
          windows.element.innerHTML += '\n';
        }
        if (data.values === 'Tab') {
          windows.element.innerHTML += '\t';
        }
        if (data.values === 'ControlLeft' || data.values === 'ControlRight') {
          windows.element.innerHTML = '';
          // console.log(data.values);
        }

        pressed[data.values] = true;
        onCombo({ ...pressed });
        console.log(pressed);
      },
      up: () => {
        pressed[data.values] = false;
      },

    }, data);
    // console.log(arr);

    buttons.push(button);
    // console.log(data.values);
  }
  // return arr;
  return {
    destroer: () => {
      // console.log(Math.random());
      buttons.forEach((destroy) => {
        destroy();
      });
    },
    buttons: arr,
  };
}
