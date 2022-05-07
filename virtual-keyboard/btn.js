import { boxBtn } from './formsBtn.js';
import AbstractForm from './classParent.js';
import WindowForm from './window.js';
import { containers } from './container.js';

const windows = new WindowForm(containers.element);

class Btns extends AbstractForm {
  constructor(body, className, textContent) {
    super(body, 'div', className);
    this.element.textContent = textContent;
    this.element.onclick = () => {
      this.onClick();
    };
  }
}

function createButton(code, caption, className, controller) {
  const btn = new Btns(boxBtn.element, className, caption);
  const down = () => {
    btn.element.classList.add('active');
    controller.down();
  };
  const up = () => {
    btn.element.classList.remove('active');
    controller.up();
  };
  btn.onClick = () => {
    down();
    up();
  };
  const kde = (e) => {
    if (e.code === code) {
      if (e.code === 'CapsLock' && code === 'CapsLock') {
        btn.element.classList.add('active');
        // console.log('1');
      }
      e.preventDefault();
      down();
    }
  };
  document.addEventListener('keydown', kde);

  const kpe = (e) => {
    if (e.code === code) {
      e.preventDefault();
      up();
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
    const name = data.contents[currentLang];
    const value = data.contentInput;
    let text = name;
    let style = 'btn';
    if (name === 'пробел' || name === 'space') {
      text = value;
      style = 'space';
    } else if (name === 'Caps Lock' || name === 'Shift' || name === 'Enter' || name === 'Backspace' || name === 'Tab') {
      text = value;
      style = 'caps';
    } else if (name === 'Alt' || name === 'DEL' || name === 'Ctrl') {
      text = value;
      style = 'btn';
    } else if (name === 'lang') {
      text = value;
      style = 'lang';
    }

    const button = createButton(data.values, name, style, {
      down: () => {
        windows.element.innerHTML += text;
        pressed[data.values] = true;
        onCombo({ ...pressed });
      },
      up: () => {
        pressed[data.values] = false;
      },
    });
    buttons.push(button);
    // console.log(data);
    // console.log(name);
  }
  return () => {
    buttons.forEach((destroy) => {
      destroy();
    });
  };
}
