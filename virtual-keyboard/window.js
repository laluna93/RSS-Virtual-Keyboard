import AbstractForm from './classParent.js';

export default class WindowForm extends AbstractForm {
  constructor(parent, value = '') {
    super(parent, 'textarea', 'window', value);
    this.element.innerHTML = value;
  }
}
