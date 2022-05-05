import AbstractForm from './classParent.js';

export default class Form extends AbstractForm {
  constructor(body, tag, className, textContent) {
    super(body, tag, className);
    this.element.textContent = textContent;
  }

  clicks() {
    this.element.addEventListener('click', () => {
      // console.log(textContent);
    });
  }
}
