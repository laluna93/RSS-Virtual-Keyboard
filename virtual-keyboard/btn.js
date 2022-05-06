// import { bts } from './object.js';
// import AbstractForm from './classParent.js';
// import { currentLang } from './index.js'
// export default class Btns extends AbstractForm {
//   constructor(body, className) {
//     super(body, tag, className);

//   }
// }


// export default class Btns extends AbstractForm {
//   constructor(body, className) {
//     super(body, 'button', className, bts.contents[currentLang])
//     for (let i = 0; i < bts.length; i += 1) {
//       let btn;
//       if (bts[i].contents[currentLang] === 'пробел') {
//         btn = new AbstractForm(this.element, 'button', 'space', bts[i].contents[currentLang])
//       } else if (bts[i].contents[currentLang] === 'Caps Lock' || bts[i].contents[currentLang] === 'Shift' || bts[i].contents[currentLang] === 'ENTER' || bts[i].contents[currentLang] === 'Backspace' || bts[i].contents[currentLang] === 'Tab') {
//         btn = new AbstractForm(this.element, 'button', 'caps', bts[i].contents[currentLang]);
//       } else {
//         btn = new AbstractForm(this.element, 'button', 'btn', bts[i].contents[currentLang]);
//       }
//     }
//   }
// }
// export let btn = new Btns(boxBtn.element)

import Btns from "./index.js";
import formsBtn, { boxBtn } from './formsBtn.js';

function createButton(code, caption, className, controller) {
  const btn = new Btns(boxBtn.element, className, caption);
  const down = () => {
    // onInput(inputText)
    btn.element.classList.add('active')
    controller.down()

  }
  const up = () => {
    btn.element.classList.remove('active')
    controller.up()

  }
  btn.onClick = () => {
    down()
    up()
  }
  const kde = (e) => {
    if (e.code === code) {
      down()
    }
  }
  document.addEventListener('keydown', kde);


  const kpe = (e) => {
    if (e.code === code) {
      up()
    }
  }
  document.addEventListener('keyup', kpe);


  return () => {
    document.removeEventListener('keydown', kde)
    document.removeEventListener('keyup', kpe)
    btn.destroy()
  }
}

export function ruCreate(bts, windows, currentLang, onCombo) {
  const pressed = {}
  const buttons = []
  for (let i = 0; i < bts.length; i += 1) {
    const data = bts[i]
    const name = data.contents[currentLang]
    const value = data.contentInput
    let text = name
    let style = 'btn'
    if (name === 'пробел' || name === 'space') {
      text = value
      style = 'space'
    } else if (name === 'Caps Lock' || name == 'Shift' || name == 'ENTER' || name == 'Backspace' || name == 'Tab') {
      text = value
      style = 'caps'
    }
    const button = createButton(data.values, name, style, {
      down: () => {
        windows.element.innerHTML += text;
        pressed[data.values] = true
        onCombo({ ...pressed })
      },
      up: () => {
        pressed[data.values] = false

      },
    })
    buttons.push(button)
  }
  return () => {
    console.log(Math.random())
    buttons.forEach((destroy) => {
      destroy()
    })
  }
}
