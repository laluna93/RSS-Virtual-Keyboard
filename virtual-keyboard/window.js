import AbstractForm from './classParent.js';

export default class WindowForm extends AbstractForm {
  constructor(body, tag, className, value = '') {
    super(body, tag, className, value);
    this.element.innerHTML = value;
  }
}
