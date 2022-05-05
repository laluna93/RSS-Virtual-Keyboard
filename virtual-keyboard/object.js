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
    values: 'Backquote',
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
    values: 'Digit1',
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
    values: 'Digit2',
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
    values: 'Digit3',
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
    values: 'Digit4',
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
    values: 'Digit5',
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
    values: 'Digit6',
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
    values: 'Digit7',
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
    values: 'Digit8',
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
    values: 'Digit9',
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
    values: 'Digit0',
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
    values: 'Minus',
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
    values: 'Equal',
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
    values: 'Backspace',
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
    values: 'Tab',
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
    values: 'KeyQ',
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
    values: 'KeyW',
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
    values: 'KeyE',
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
    values: 'KeyR',
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
    values: 'KeyT',
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
    values: 'KeyY',
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
    values: 'KeyU',
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
    values: 'KeyI',
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
    values: 'KeyO',
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
    values: 'KeyP',
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
    values: 'BracketLeft',
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
    values: 'BracketRight',
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
    values: 'Backslash',
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
    values: 'Delete',
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
    values: 'CapsLock',
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
    values: 'KeyA',
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
    values: 'KeyS',
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
    values: 'KeyD',
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
    values: 'KeyF',
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
    values: 'KeyG',
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
    values: 'KeyH',
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
    values: 'KeyJ',
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
    values: 'KeyK',
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
    values: 'KeyL',
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
    values: 'Semicolon',
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
    values: 'Quote',
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
    values: 'Enter',
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
    values: 'ShiftLeft',
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
    values: 'KeyZ',
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
    values: 'KeyX',
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
    values: 'KeyC',
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
    values: 'KeyV',
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
    values: 'KeyB',
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
    values: 'KeyN',
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
    values: 'KeyM',
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
    values: 'Comma',
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
    values: 'Period',
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
    values: 'Slash',
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
    values: 'ArrowUp',
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
    values: 'ShiftRight',
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
    values: 'ControlLeft',
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
    // values:
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
    values: 'AltLeft',
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
    values: 'Space',
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
    values: 'AltRight',
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
    values: 'ArrowLeft',
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
    values: 'ArrowDown',
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
    values: 'ArrowRight',
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
    values: 'ControlRight',
  },
];

export default bts;
