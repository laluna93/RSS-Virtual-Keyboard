const bts = [
  {
    contents: {
      ru: 'ё',
      en: '`',
    },
    alts: {
      ru: 'ё',
      en: '~',
    },
    // values: { }
  },
  {
    contents: {
      ru: '1',
      en: '1',
    },
    alts: {
      ru: '!',
      en: '!',
    },
  },
  {
    contents: {
      ru: '2',
      en: '2',
    },
    alts: {
      ru: '"',
      en: '@',
    },
  },
  {
    contents: {
      ru: '3',
      en: '3',
    },
    alts: {
      ru: '№',
      en: '#',
    },
  },
  {
    contents: {
      ru: '4',
      en: '4',
    },
    alts: {
      ru: ';',
      en: '$',
    },
  },
  {
    contents: {
      ru: '5',
      en: '5',
    },
    alts: {
      ru: '%',
      en: '%',
    },
  },
  {
    contents: {
      ru: '6',
      en: '6',
    },
    alts: {
      ru: ':',
      en: '^',
    },
  },
  {
    contents: {
      ru: '7',
      en: '7',
    },
    alts: {
      ru: '?',
      en: '&',
    },
  },
  {
    contents: {
      ru: '8',
      en: '8',
    },
    alts: {
      ru: '*',
      en: '*',
    },
  },
  {
    contents: {
      ru: '9',
      en: '9',
    },
    alts: {
      ru: '(',
      en: '(',
    },
  },
  {
    contents: {
      ru: '0',
      en: '0',
    },
    alts: {
      ru: ')',
      en: ')',
    },
  },
  {
    contents: {
      ru: '-',
      en: '-',
    },
    alts: {
      ru: '_',
      en: '_',
    },
  },
  {
    contents: {
      ru: '=',
      en: '=',
    },
    alts: {
      ru: '+',
      en: '+',
    },
  },
  {
    contents: {
      ru: 'Backspace',
      en: 'Backspace',
    },
    alts: {
      ru: 'Backspace',
      en: 'Backspace',
    },
  },

  {
    contents: {
      ru: 'Tab',
      en: 'Tab',
    },
    alts: {
      ru: 'Tab',
      en: 'Tab',
    },
  },
  {
    contents: {
      ru: 'й',
      en: 'q',
    },
    alts: {
      ru: 'й',
      en: 'q',
    },
  },
  {
    contents: {
      ru: 'ц',
      en: 'w',
    },
    alts: {
      ru: 'ц',
      en: 'w',
    },
  },
  {
    contents: {
      ru: 'у',
      en: 'e',
    },
    alts: {
      ru: 'у',
      en: 'e',
    },
  },
  {
    contents: {
      ru: 'к',
      en: 'r',
    },
    alts: {
      ru: 'к',
      en: 'r',
    },
  },
  {
    contents: {
      ru: 'е',
      en: 't',
    },
    alts: {
      ru: 'е',
      en: 't',
    },
  },
  {
    contents: {
      ru: 'н',
      en: 'y',
    },
    alts: {
      ru: 'н',
      en: 'y',
    },
  },
  {
    contents: {
      ru: 'г',
      en: 'u',
    },
    alts: {
      ru: 'г',
      en: 'u',
    },
  },
  {
    contents: {
      ru: 'ш',
      en: 'i',
    },
    alts: {
      ru: 'ш',
      en: 'i',
    },
  },
  {
    contents: {
      ru: 'щ',
      en: 'o',
    },
    alts: {
      ru: 'щ',
      en: 'o',
    },
  },
  {
    contents: {
      ru: 'з',
      en: 'p',
    },
    alts: {
      ru: 'з',
      en: 'p',
    },
  },
  {
    contents: {
      ru: 'х',
      en: '[',
    },
    alts: {
      ru: 'х',
      en: '{',
    },
  },
  {
    contents: {
      ru: 'ъ',
      en: ']',
    },
    alts: {
      ru: 'ъ',
      en: '}',
    },
  },
  {
    contents: {
      ru: '\\',
      en: '\\',
    },
    alts: {
      ru: '/',
      en: '|',
    },
  },
  {
    contents: {
      ru: 'DEL',
      en: 'DEL',
    },
    alts: {
      ru: 'DEL',
      en: 'DEL',
    },
  },
  {
    contents: {
      ru: 'Caps Lock',
      en: 'Caps Lock',
    },
    alts: {
      ru: 'Caps Lock',
      en: 'Caps Lock',
    },
  },
  {
    contents: {
      ru: 'ф',
      en: 'a',
    },
    alts: {
      ru: 'ф',
      en: 'a',
    },
  },
  {
    contents: {
      ru: 'ы',
      en: 's',
    },
    alts: {
      ru: 'ы',
      en: 's',
    },
  },
  {
    contents: {
      ru: 'в',
      en: 'd',
    },
    alts: {
      ru: 'в',
      en: 'd',
    },
  },
  {
    contents: {
      ru: 'а',
      en: 'f',
    },
    alts: {
      ru: 'а',
      en: 'f',
    },
  },
  {
    contents: {
      ru: 'п',
      en: 'g',
    },
    alts: {
      ru: 'п',
      en: 'g',
    },
  },
  {
    contents: {
      ru: 'р',
      en: 'h',
    },
    alts: {
      ru: 'р',
      en: 'h',
    },
  },
  {
    contents: {
      ru: 'о',
      en: 'j',
    },
    alts: {
      ru: 'о',
      en: 'j',
    },
  },
  {
    contents: {
      ru: 'л',
      en: 'k',
    },
    alts: {
      ru: 'л',
      en: 'k',
    },
  },
  {
    contents: {
      ru: 'д',
      en: 'l',
    },
    alts: {
      ru: 'д',
      en: 'l',
    },
  },
  {
    contents: {
      ru: 'ж',
      en: ';',
    },
    alts: {
      ru: 'ж',
      en: ':',
    },
  },
  {
    contents: {
      ru: 'э',
      en: '\'',
    },
    alts: {
      ru: 'э',
      en: '"',
    },
  },
  {
    contents: {
      ru: 'ENTER',
      en: 'ENTER',
    },
    alts: {
      ru: 'ENTER',
      en: 'ENTER',
    },
  },
  {
    contents: {
      ru: 'Shift',
      en: 'Shift',
    },
    alts: {
      ru: 'Shift',
      en: 'Shift',
    },
  },
  {
    contents: {
      ru: 'я',
      en: 'z',
    },
    alts: {
      ru: 'я',
      en: 'z',
    },
  },
  {
    contents: {
      ru: 'ч',
      en: 'x',
    },
    alts: {
      ru: 'ч',
      en: 'x',
    },
  },
  {
    contents: {
      ru: 'с',
      en: 'c',
    },
    alts: {
      ru: 'с',
      en: 'c',
    },
  },
  {
    contents: {
      ru: 'м',
      en: 'v',
    },
    alts: {
      ru: 'м',
      en: 'v',
    },
  },
  {
    contents: {
      ru: 'и',
      en: 'b',
    },
    alts: {
      ru: 'и',
      en: 'b',
    },
  },
  {
    contents: {
      ru: 'т',
      en: 'n',
    },
    alts: {
      ru: 'т',
      en: 'n',
    },
  },
  {
    contents: {
      ru: 'ь',
      en: 'm',
    },
    alts: {
      ru: 'ь',
      en: 'm',
    },
  },
  {
    contents: {
      ru: 'б',
      en: ',',
    },
    alts: {
      ru: 'б',
      en: '<',
    },
  },
  {
    contents: {
      ru: 'ю',
      en: '.',
    },
    alts: {
      ru: 'ю',
      en: '>',
    },
  },

  {
    contents: {
      ru: '.',
      en: '/',
    },
    alts: {
      ru: ',',
      en: '?',
    },
  },

  {
    contents: {
      ru: ' △',
      en: ' △',
    },
    alts: {
      ru: ' △',
      en: ' △',
    },
  },

  {
    contents: {
      ru: 'Shift',
      en: 'Shift',
    },
    alts: {
      ru: 'Shift',
      en: 'Shift',
    },
  },
  {
    contents: {
      ru: 'Ctrl',
      en: 'Ctrl',
    },
    alts: {
      ru: 'Ctrl',
      en: 'Ctrl',
    },
  },

  {
    contents: {
      ru: 'Win',
      en: 'Win',
    },
    alts: {
      ru: 'Win',
      en: 'Win',
    },
  },

  {
    contents: {
      ru: 'Alt',
      en: 'Alt',
    },
    alts: {
      ru: 'Alt',
      en: 'Alt',
    },
  },
  {
    contents: {
      ru: 'пробел',
      en: 'space',
    },
    alts: {
      ru: '&nbsp;',
      en: '&nbsp;',
    },
  },
  {
    contents: {
      ru: 'Alt',
      en: 'Alt',
    },
    alts: {
      ru: 'Alt',
      en: 'Alt',
    },
  },

  {
    contents: {
      ru: '◁',
      en: '◁',
    },
    alts: {
      ru: '◁',
      en: '◁',
    },
  },
  {
    contents: {
      ru: '▽',
      en: '▽',
    },
    alts: {
      ru: '▽',
      en: '▽',
    },
  },
  {
    contents: {
      ru: '▷',
      en: '▷',
    },
    alts: {
      ru: '▷',
      en: '▷',
    },
  },
  {
    contents: {
      ru: 'Ctrl',
      en: 'Ctrl',
    },
    alts: {
      ru: 'Ctrl',
      en: 'Ctrl',
    },
  },
];
class AbstractForm {
  constructor(parent, tag, className) {
    this.element = document.createElement(tag);
    this.element.className = className;
    parent.append(this.element);
  }
}
class Form extends AbstractForm {
  constructor(body, tag, className, textContent,) {
    super(body, tag, className);
    this.element.textContent = textContent;

    this.element.addEventListener('click', () => {
      console.log(textContent);
    });
  }
}
class WindowForm extends AbstractForm {
  constructor(body, tag, className, value = '') {
    super(body, tag, className, value);
    this.element.innerHTML = value;
  }
}
function createKeyboard() {
  const cont = new Form(document.body, 'div', 'container');
  const windows = new WindowForm(cont.element, 'textarea', 'window');

  const boxBtn = new Form(cont.element, 'div', 'box-btn');
  let btn;
  for (let i = 0; i < bts.length; i++) {
    if (bts[i].contents.ru == 'пробел') {
      btn = new Form(boxBtn.element, 'button', 'space', bts[i].contents.en);

    } else if (bts[i].contents.ru == 'Caps Lock' || bts[i].contents.ru == 'Shift' || bts[i].contents.en == 'ENTER' || bts[i].contents.ru == 'Backspace' || bts[i].contents.ru == 'Tab') {
      btn = new Form(boxBtn.element, 'button', 'caps', bts[i].contents.en);
    } else {
      btn = new Form(boxBtn.element, 'button', 'btn', bts[i].contents.en);

    }
    btn.element.addEventListener('click', () => {
      const text = `${bts[i].contents.en}`;
      if (bts[i].contents.ru == 'пробел') {
        windows.element.innerHTML += ' ';

      } else {
        windows.element.innerHTML += text;

      }
      console.log('createBtn');
    });
  }
}
// else.target else.current.target value
// else.key.code

// function styless() {
//   for (let i = 0; i < bts.length; i++) {
//     if (bts[i].contents.ru = 'пробел') {
//       bts[i].style.overflow = ''

//     }
//   }
//   styless()


createKeyboard();