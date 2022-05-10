import AbstractForm from './classParent.js';
import { containers } from './container.js';

export default class Form extends AbstractForm {
  constructor(body) {
    super(body, 'div', 'box-btn');
  }
}

export const boxBtn = new Form(containers.element);
