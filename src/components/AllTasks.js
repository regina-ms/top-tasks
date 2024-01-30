/* eslint-disable no-underscore-dangle */
import List from './List';
import TaskItemView from './TaskItem';

export default class AllTasks extends List {
  constructor(arr) {
    super(arr);
    this.element.classList.add('task-list');
    this._filteredArr = [];
  }

  showFilteredList() {
    let html = '';
    for (const task of this.filteredArr) {
      html += new TaskItemView(task).render();
    }
    if (!this.filteredArr.length) {
      this.renderEmpty();
    } else {
      this.element.innerHTML = html;
    }
  }

  set filteredArr(arr) {
    this._filteredArr = arr;
  }

  get filteredArr() {
    return this._filteredArr;
  }

  filter(value) {
    const filteredTasks = this.arr
      .filter((item) => item.toLowerCase().trim().startsWith(value.toLowerCase().trim()));

    this.filteredArr = filteredTasks;
    this.showFilteredList();
  }

  renderEmpty() {
    this.element.innerHTML = '<div class="empty-msg">No tasks found</div>';
  }
}
