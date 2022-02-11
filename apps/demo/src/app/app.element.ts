import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@micro-frontend/ui-demo';

@customElement('micro-frontend-root')
export class GameElement extends LitElement {
  override render(): TemplateResult {
    return html`<mf-demo></mf-demo>`;
  }
}
