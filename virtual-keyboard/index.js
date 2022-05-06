import Form from './formsBtn.js';
import AbstractForm from './classParent.js';
import { bts } from './object.js';
import WindowForm, { windows } from './window.js';
import Container, { containers } from './container.js';
// import Btns from './btn.js'
import formsBtn, { boxBtn } from './formsBtn.js';
import { ruCreate } from './btn.js';
// import Btns from './btn.js'

// let currentLang = 'ru'

// new Btns(boxBtn.element)

export default class Btns extends AbstractForm {
  constructor(body, className, textContent) {
    super(body, 'div', className);
    this.element.textContent = textContent;
    this.element.onclick = () => {
      this.onClick()
    }
  }
}
const langs = ['en', 'ru']

function createKeys(langIndex) {
  const destroyKeys = ruCreate(bts, windows, langs[langIndex], (combo) => {
    console.log(destroyKeys)
    if (combo['AltLeft'] == true && combo['ShiftLeft'] == true) {

      destroyKeys()
      createKeys((langIndex + 1) % langs.length)
    }
    if (combo['Caps Lock']) {
      console.log('1')
    }
  })
}
createKeys(0)


