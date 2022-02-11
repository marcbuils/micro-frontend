import { Router } from '@vaadin/router';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { routes } from './ui-demo.routes';

@customElement('mf-demo')
export class GameElement extends LitElement {
  override render(): TemplateResult {
    return html`<div data-router-outlet></div>`;
  }

  override firstUpdated(): void {
    const router = new Router(this.shadowRoot?.querySelector('[data-router-outlet]'));
    router.setRoutes(routes);
  }
}
