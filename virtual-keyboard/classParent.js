export default class AbstractForm {
  constructor(parent, tags, className) {
    this.element = document.createElement(tags);
    this.element.className = className;
    parent.append(this.element);
  }

  destroy() {
    this.element.remove();
  }
}
