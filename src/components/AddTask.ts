import { html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { addTaskAction } from '../store/actions.js';
import { BaseElement } from '../base-element.js';

@customElement('add-task')
export class AddTask extends BaseElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @query('#addTaskInput') private input: HTMLInputElement;

  render() {
    return html`<form @submit="${this.submit}">
      <input id="addTaskInput" type="text" placeholder="Create task" />
    </form>`;
  }

  private submit(e: Event): void {
    e.preventDefault();
    this.store.dispatch(addTaskAction(this.input.value))
    this.input.value = '';
  }
}
