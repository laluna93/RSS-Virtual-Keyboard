// import Form from './formsBtn.js';
import { bts } from './object.js';
import ruCreate from './btn.js';
import state from './keyboardState.js';

let currentLang = localStorage.getItem('res') || 'ru';
// export let capslog = false;

function saveLang() {
  localStorage.setItem('res', currentLang);
}
window.addEventListener('beforeunload', saveLang);

function createKeys() {
  const { buttons, destroer } = ruCreate(bts, currentLang, (combo) => {
    const oneResult = combo.AltLeft && combo.ShiftLeft;
    const twoResult = combo.AltRight && combo.ShiftRight;
    if (oneResult || twoResult || combo.lang) {
      // buttons()
      // createKeys((langIndex + 1) % langs.length)
      destroer();
      if (currentLang === 'ru') {
        currentLang = 'en';
        state.capslog = false;
      } else {
        currentLang = 'ru';
        state.capslog = false;
      }
      // buttons.forEach((e) => {
      //   e.element.textContent = e.buttonInfo.contents[currentLang];
      // });
      createKeys();
      // console.log(currentLang);
    }

    const capsL = () => {
      if (combo.CapsLock) {
        state.capslog = !(state.capslog);
        buttons.forEach((e) => {
          if (e.buttonInfo.type === 'input') {
            // console.log(e.buttonInfo)
            if (state.capslog) {
              e.element.textContent = e.element.textContent.toUpperCase();
            } else {
              e.element.textContent = e.element.textContent.toLowerCase();
            }
          }
        });
      }
    };
    // console.log(value)

    capsL();
    // buttons();
  });
}
createKeys();
