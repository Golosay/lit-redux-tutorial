import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Store } from 'redux';
import { initStore } from './store/store.js';
import './components/AddTask.js';
import './components/TaskList.js';

@customElement('todo-list')
export class TodoList extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--todo-list-text-color, #000);
    }
  `;

  public store: Store;

  constructor() {
    super();
    this.store = initStore();
  }

  render() {
    return html`
      <h2>TODO list</h2>
      <add-task .store=${this.store}></add-task>
      <task-list .store=${this.store}></task-list>
    `;
  }
}
