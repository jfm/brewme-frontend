import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js'
import '@polymer/paper-tabs/paper-tab.js'
/**
 * @customElement
 * @polymer
 */
class BrewmeFrontendApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-tabs selected="0" scrollable>
        <paper-tab>Dashboard</paper-tab>
        <paper-tab>Recipes</paper-tab>
      </paper-tabs>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'brewme-frontend-app'
      }
    };
  }
}

window.customElements.define('brewme-frontend-app', BrewmeFrontendApp);
