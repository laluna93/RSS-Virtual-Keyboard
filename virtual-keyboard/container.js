import AbstractForm from './classParent.js';

export default class Container extends AbstractForm {
  constructor(body) {
    super(body, 'div', 'container');
  }
}
export const containers = new Container(document.body);
