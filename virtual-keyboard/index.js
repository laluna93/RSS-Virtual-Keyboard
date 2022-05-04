class AbstractBtns {
  constructor(parent, tag, className, textContent) {
    this.element = document.createElement(tag);
    this.element.className = className
    this.element.textContent = textContent
    parent.append(this.element);
  }
}
class Btn extends AbstractBtns {
  constructor(body, tag = 'div', className = '', textContent = '') {
    super(body, tag, className, textContent);

  }
}

const btn = new Btn(document.body, 'div', 'container');
const btn2 = new Btn(document.body, 'div', 'box-btn');
const btn3 = new Btn(btn2.element, 'button', 'btn', 'A');
btn3.append(btn2)


