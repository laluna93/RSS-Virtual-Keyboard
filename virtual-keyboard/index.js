import Form from './forms.js';
import bts from './object.js';
import WindowForm from './window.js';

let currentLang = 'ru'



function ruCreate() {
  const cont = new Form(document.body, 'div', 'container');
  const windows = new WindowForm(cont.element, 'textarea', 'window');
  const boxBtn = new Form(cont.element, 'div', 'box-btn');
  for (let i = 0; i < bts.length; i += 1) {
    let btn;
    if (bts[i].contents[currentLang] === 'пробел') {
      btn = new Form(boxBtn.element, 'button', 'space', bts[i].contents[currentLang] = '');
    } else if (bts[i].contents[currentLang] === 'Caps Lock' || bts[i].contents[currentLang] == 'Shift' || bts[i].contents[currentLang] == 'ENTER' || bts[i].contents[currentLang] == 'Backspace' || bts[i].contents[currentLang] == 'Tab') {
      btn = new Form(boxBtn.element, 'button', 'caps', bts[i].contents[currentLang]);
    } else {
      btn = new Form(boxBtn.element, 'button', 'btn', bts[i].contents[currentLang]);
    }
    document.addEventListener('keydown', (e) => {
      if (e.code === bts[i].values) {
        let text = ''
        if (bts[i].type == 'noInput') {
          text = `${bts[i].contentInput}`
          console.log('13')
        } else {
          text = `${bts[i].contents[currentLang]}`
        }
        windows.element.innerHTML += text;

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
      let text = ''
      if (bts[i].type == 'noInput') {
        text = `${bts[i].contentInput}`
        console.log('13')
      } else {
        text = `${bts[i].contents[currentLang]}`
      }
      windows.element.innerHTML += text;
    });
  }
}
ruCreate()

