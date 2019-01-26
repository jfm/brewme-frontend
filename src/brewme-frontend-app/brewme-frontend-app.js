import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js'
import '@polymer/paper-tabs/paper-tabs.js'
import '@polymer/paper-tabs/paper-tab.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-a11y-keys/iron-a11y-keys.js';

import '../brewme-recipes/brewme-recipes.js'

class BrewmeFrontendApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <app-header reveals>
        <app-toolbar>
          <div main-title>BrewMe</div>
        </app-toolbar>
        <paper-tabs selected="{{currentPage}}" scrollable>
          <paper-tab>Dashboard (1)</paper-tab>
          <paper-tab>Recipes (2)</paper-tab>
        </paper-tabs>
      </app-header>
      <iron-pages selected="{{currentPage}}">
        <div>DASHBOARD</div>
        <div>
          <brewme-recipes></brewme-recipes>
        </div>
      </iron-pages>
      <iron-a11y-keys id="shortcuts"
                      target="[[target]]" keys="1 2"
                                          on-keys-pressed="_shortcutPressed">
      </iron-a11y-keys>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'brewme-frontend-app'
      },
      currentPage: {
        type: Number,
        value: 0
      },
      boundKeys: {
        type: Array
      },
      target: {
        type: Object,
        value: function(){
          return document.body;
        }
      },
      ready: function(){
        this.boundKeys = this.$.shortcuts.keys.split(' ');
      },
    };
  }

  _shortcutPressed(event) {
    if(event.detail.key.localeCompare("1") == 0){
      this.currentPage = 0;
    }
    if(event.detail.key.localeCompare("2") == 0){
      this.currentPage = 1;
    }
  }

}

window.customElements.define('brewme-frontend-app', BrewmeFrontendApp);
