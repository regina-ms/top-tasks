export default class TaskItemView {
  constructor(content) {
    this.content = content;
  }

  render() {
    return `<li class='task'>${this.content}</li>`;
  }
}
