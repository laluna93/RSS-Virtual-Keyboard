// import Form from './formsBtn.js';
import { bts } from './object.js';
import ruCreate from './btn.js';

export let currentLang = localStorage.getItem('res') || 'ru';
export let capslog = false;

function saveLang() {
  localStorage.setItem('res', currentLang);
}
window.addEventListener('beforeunload', saveLang);

export function createKeys() {
  const buttons = ruCreate(bts, currentLang, (combo) => {
    const oneResult = combo.AltLeft && combo.ShiftLeft;
    const twoResult = combo.AltRight && combo.ShiftRight;
    if (oneResult || twoResult || combo.lang) {
      if (currentLang === 'ru') {
        currentLang = 'en';
        capslog = false
      } else {
        currentLang = 'ru';
        capslog = false
      }
      buttons.forEach((e) => {
        e.element.textContent = e.buttonInfo.contents[currentLang]

        // console.log(e)
      })
      // console.log(bts)
      // console.log(buttons)
    }
    const capsL = () => {
      if (combo.CapsLock) {
        capslog = (capslog) ? false : true
        buttons.forEach((e) => {
          if (e.buttonInfo.type == 'input') {
            // console.log(e.buttonInfo)
            if (capslog) {
              e.element.textContent = e.element.textContent.toUpperCase()

            } else {
              e.element.textContent = e.element.textContent.toLowerCase()
            }
          }
        })
      }
    }
    // console.log(value)

    capsL()
  });
}
createKeys();


