import ErrorMsg from './ErrorMsg';

export default class Form {
  constructor() {
    this.element = document.createElement('form');
    this.input = document.createElement('input');
    this.element.append(this.input);
    this.error = new ErrorMsg(this.element);
  }

  render() {
    return this.element;
  }
}
