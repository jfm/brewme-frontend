import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-item/paper-item.js'

class BrewMeRecipeDetails extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]:host, .hidden:host) {
          display: none;
        }
        paper-card {
          width: 100%;
        }
      </style>
      <iron-ajax auto url="http://localhost:8000/recipes/[[recipe]]" handle-as="json" last-response="{{jsonRecipe}}"></iron-ajax>
      <paper-card heading="Brew Details">
        <div class="card-content">
          <paper-item>Name: [[jsonRecipe.name]]</paper-item>
          <paper-item>Style: [[jsonRecipe.style.name]]</paper-item>
          <paper-item>Type: [[jsonRecipe.type]]</paper-item>
        </div>
      </paper-card>
    `;
  }

  static get properties() {
    return {
      recipe: {
        type: String
      },
    };
  }
}

window.customElements.define('brewme-recipe-details', BrewMeRecipeDetails);
