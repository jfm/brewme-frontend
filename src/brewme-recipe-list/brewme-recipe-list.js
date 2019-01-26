import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-listbox/paper-listbox.js'
import '@polymer/paper-item/paper-item.js'

class BrewmeRecipeList extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        paper-card {
          width: 300px;
        }
      </style>
      <paper-card heading="Recipes">
        <paper-listbox selected="{{selectedRecipe}}" attr-for-selected="value">
          <template is="dom-repeat" items="[[recipes]]" as="recipe">
            <paper-item value="[[recipe.name]]">[[recipe.name]]</paper-item>
          </template>
        </paper-listbox>
      </paper-card>
    `;
  }

  static get properties() {
    return {
      recipes: {
        type: Object
      },
      selectedRecipe: {
        type: String,
        notify: true
      },
    };
  }
}


window.customElements.define('brewme-recipe-list', BrewmeRecipeList);
