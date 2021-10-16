import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseElement } from '../base-element.js';
import { ITask, IStore } from '../store/reducers.js';
import { markTaskAction } from '../store/actions.js';

@customElement('task-list')
export class TaskList extends BaseElement {
  static styles = css`
    :host {
      display: block;
    }
    .done {
        text-decoration: line-through;
    }
  `;

  private tasks: ITask[] = [];

  stateChanged(state: IStore) {
    this.tasks = state.tasks;
    this.requestUpdate();
  }

  render() {
    return html`<ol>
      ${this.tasks?.map(
        (task, index) => html`<li>
          <label class="${task.done ? 'done': ''}">
            <input
              type="checkbox"
              @change="${() => {
                this.changeState(index);
              }}"
            />
            ${task.label}
          </label>
        </li>`
      )}
    </ol>`;
  }

  changeState(index: number) {
    this.store.dispatch(markTaskAction(index, !this.tasks[index].done));
  }
}
