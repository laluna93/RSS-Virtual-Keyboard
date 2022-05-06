import AbstractForm from './classParent.js';
import { containers } from './container.js';
export default class WindowForm extends AbstractForm {
  constructor(parent, value) {
    super(parent, 'textarea', 'window', value = '');
    this.element.innerHTML = value;
  }
}
export const windows = new WindowForm(containers.element);
