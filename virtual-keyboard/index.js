import { bts } from './object.js';
import ruCreate from './btn.js';
import state from './keyboardState.js';

let currentLang = localStorage.getItem('res') || 'ru';

function saveLang() {
  localStorage.setItem('res', currentLang);
}
window.addEventListener('beforeunload', saveLang);

function createKeys() {
  const { buttons, destroer } = ruCreate(bts, currentLang, (combo) => {
    const oneResult = combo.AltLeft && combo.ShiftLeft;
    const twoResult = combo.AltRight && combo.ShiftRight;
    if (oneResult || twoResult || combo.lang) {
      destroer();
      if (currentLang === 'ru') {
        currentLang = 'en';
        state.capslog = false;
      } else {
        currentLang = 'ru';
        state.capslog = false;
      }
      createKeys();
    }

    const capsL = () => {
      if (combo.CapsLock) {
        state.capslog = !(state.capslog);
        buttons.forEach((e) => {
          if (e.buttonInfo.type === 'input') {
            if (state.capslog) {
              e.element.textContent = e.element.textContent.toUpperCase();
            } else {
              e.element.textContent = e.element.textContent.toLowerCase();
            }
          }
        });
      }
    };
    capsL();
  });
}
createKeys();
