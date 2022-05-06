import AbstractForm from './classParent.js';
import Container, { containers } from './container.js';

export default class Form extends AbstractForm {
  constructor(body) {
    super(body, 'div', 'box-btn');
  }
}

export const boxBtn = new Form(containers.element);

