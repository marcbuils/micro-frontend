import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('mf-todolist')
export class TodolistElement extends LitElement {
  protected override render(): unknown {
      return html`
        <h1>Hello World</h1>
      `;
  }
}
