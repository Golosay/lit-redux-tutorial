/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { LitElement } from 'lit';
import { Unsubscribe, Store } from 'redux';
import { property } from 'lit/decorators.js';

export class BaseElement extends LitElement {
  private storeUnsubscribe: Unsubscribe;

  @property({ type: Object })
  store: Store;

  connectedCallback() {
    super.connectedCallback();
    this.storeUnsubscribe = this.store.subscribe(() =>
      this.stateChanged(this.store.getState().reducer)
    );
    this.stateChanged(this.store.getState().reducer);
  }

  disconnectedCallback() {
    this.storeUnsubscribe();
    super.disconnectedCallback();
  }

  /**
   * The `stateChanged(state)` method will be called when the state is updated.
   */
  stateChanged(state: any) {}
}
