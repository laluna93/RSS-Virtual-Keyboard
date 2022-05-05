export default class AbstractForm {
  constructor(parent, tag, className) {
    this.element = document.createElement(tag);
    this.element.className = className;
    parent.append(this.element);
  }
}
