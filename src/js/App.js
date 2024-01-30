import AllTasks from '../components/AllTasks';
import Form from '../components/Form';
import PinnedTasks from '../components/PinnedTasks';
import getData from './getData';

export default class App {
  constructor(parentElement) {
    this.element = document.createElement('div');
    this.element.classList.add('app');
    this.parentElement = parentElement;
    this.parentElement.append(this.element);

    this.taskList = new AllTasks();
    this.pinnedList = new PinnedTasks();
    this.form = new Form();

    this.onTaskListClick = this.onTaskListClick.bind(this);
    this.taskList.element.addEventListener('click', this.onTaskListClick);
    this.onPinnedListCLick = this.onPinnedListCLick.bind(this);
    this.pinnedList.element.addEventListener('click', this.onPinnedListCLick);

    this.onFormInputChange = this.onFormInputChange.bind(this);
    this.form.element.querySelector('input').addEventListener('input', this.onFormInputChange);

    this.onSubmit = this.onSubmit.bind(this);
    this.form.element.addEventListener('submit', this.onSubmit);
  }

  async init() {
    this.createSection('form', 'TOP Tasks').append(this.form.render());
    this.createSection('pinned', 'Pinned:').append(this.pinnedList.render());
    await this.createTasksList();
    this.createSection('tasks', 'All Tasks:').append(this.taskList.element);
  }

  async createTasksList() {
    const tasks = await getData(10);
    this.taskList.add(tasks);
  }

  createSection(className, title) {
    const section = document.createElement('div');
    section.classList.add('section', className);
    if (title) {
      const titleEl = document.createElement('h2');
      titleEl.textContent = title;
      section.append(titleEl);
    }
    this.element.append(section);
    return section;
  }

  onSubmit(e) {
    e.preventDefault();
    const target = e.target.querySelector('input');
    if (!target.value) {
      this.form.error.show();
    } else {
      this.taskList.add(target.value);
      target.value = '';
    }
  }

  onFormInputChange(e) {
    this.form.error.hide();
    if (!e.target.value) {
      this.taskList.filteredArr = [];
      this.taskList.render();
    } else {
      this.taskList.filter(e.target.value);
    }
  }

  onTaskListClick(e) {
    this.taskList.remove(e.target.textContent);
    this.pinnedList.add(e.target.textContent);
    this.taskList.filter(this.form.input.value);
  }

  onPinnedListCLick(e) {
    this.pinnedList.remove(e.target.textContent);
    this.taskList.arr.push(e.target.textContent);
    this.taskList.filter(this.form.input.value);
  }
}
