import List from './List';

export default class PinnedTasks extends List {
  constructor(arr) {
    super(arr);
    this.element.classList.add('pinned-list');
  }

  renderEmpty() {
    this.element.innerHTML = '<div class="empty-msg">No pinned tasks</div>';
  }
}
