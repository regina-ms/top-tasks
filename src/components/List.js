import TaskItemView from './TaskItem';

export default class List {
  constructor(arr = []) {
    this.arr = arr;
    this.element = document.createElement('ul');
    this.element.classList.add('list');
  }

  add(content) {
    this.arr = this.arr.concat(content);
    this.render();
  }

  remove(item) {
    this.arr.splice(this.arr.indexOf(item), 1);
    this.render();
  }

  render() {
    if (!this.arr.length) {
      this.renderEmpty();
    } else {
      let html = '';
      for (const task of this.arr) {
        html += new TaskItemView(task).render();
      }
      this.element.innerHTML = html;
    }

    return this.element;
  }

  renderEmpty(emptyContent = 'Nothing found') {
    this.element.innerHTML = `<div class='empty-msg'>${emptyContent}</div>`;
  }
}
