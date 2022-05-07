// import Form from './formsBtn.js';
import { bts } from './object.js';
import ruCreate from './btn.js';

let currentLang = localStorage.getItem('res') || 'ru';
function saveLang() {
  localStorage.setItem('res', currentLang);
}
window.addEventListener('beforeunload', saveLang);

function createKeys() {
  const destroyKeys = ruCreate(bts, currentLang, (combo) => {
    const oneResult = combo.AltLeft && combo.ShiftLeft;
    const twoResult = combo.AltRight && combo.ShiftRight;

    if (oneResult || twoResult || combo.lang) {
      destroyKeys();
      if (currentLang === 'ru') {
        currentLang = 'en';
      } else {
        currentLang = 'ru';
      }
      createKeys();
    }
  });
}
createKeys();
