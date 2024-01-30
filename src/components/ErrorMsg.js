export default class ErrorMsg {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.element = document.createElement('span');
    this.element.classList.add('error');
    this.element.textContent = 'input value';
    this.parentElement.append(this.element);
  }

  show() {
    this.element.classList.add('error-active');
  }

  hide() {
    this.element.classList.remove('error-active');
  }
}
