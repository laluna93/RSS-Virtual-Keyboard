import Form from './forms.js';
import bts from './object.js';
import WindowForm from './window.js';



function createKeyboard() {
  const cont = new Form(document.body, 'div', 'container');
  const windows = new WindowForm(cont.element, 'textarea', 'window');
  const boxBtn = new Form(cont.element, 'div', 'box-btn');
  for (let i = 0; i < bts.length; i += 1) {
    let btn;
    if (bts[i].contents.ru === 'пробел') {
      btn = new Form(boxBtn.element, 'button', 'space', bts[i].contents.en = '');
    } else if (bts[i].contents.ru === 'Caps Lock' || bts[i].contents.ru == 'Shift' || bts[i].contents.en == 'ENTER' || bts[i].contents.ru == 'Backspace' || bts[i].contents.ru == 'Tab') {
      btn = new Form(boxBtn.element, 'button', 'caps', bts[i].contents.en);
    } else {
      btn = new Form(boxBtn.element, 'button', 'btn', bts[i].contents.en);
    }
    document.addEventListener('keydown', (e) => {
      if (e.code === bts[i].values) {
        const text = `${bts[i].contents.en}`;
        if (bts[i].contents.ru === 'пробел') {
          windows.element.innerHTML += ' ';
        } else if (bts[i].contents.ru === 'ENTER') {
          windows.element.innerHTML += '\n ';
        } else {
          windows.element.innerHTML += text;
        }
        btn.element.style.background = '#00ff0d';
        btn.element.style.color = '#0b055f';
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === bts[i].values) {
        btn.element.style.background = '';
        btn.element.style.color = '';
      }
    });
    btn.element.addEventListener('click', () => {
      const text = `${bts[i].contents.en}`;
      if (bts[i].contents.ru === 'пробел') {
        windows.element.innerHTML += ' ';
      } else if (bts[i].contents.ru === 'ENTER') {
        windows.element.innerHTML += '\n ';
      } else {
        windows.element.innerHTML += text;
      }
    });
  }
}

createKeyboard();
