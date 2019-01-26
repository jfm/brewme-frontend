import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js'

import '../brewme-recipe-list/brewme-recipe-list.js'
import '../brewme-recipe-details/brewme-recipe-details.js'

class BrewMeRecipes extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        .flex-container {
          display: flex;
          justify-content: flex-start;
        }
        .flex_column_left {
          width: 300px;
        }
        .flex_column_right {
          flex: 1;
        }
      </style>
      <iron-ajax auto url="http://localhost:8000/recipes" handle-as="json" last-response="{{ajaxRecipes}}"></iron-ajax>
      <div class="flex-container">
        <brewme-recipe-list id="recipe-list" class="flex_column_left" recipes="[[ajaxRecipes]]" selected-recipe="{{recipe}}"></brewme-recipe-list>
        <brewme-recipe-details id="recipe-details" hidden="[[recipeDetailsHidden]]" class="flex_column_right" recipe="{{recipe}}"></brewme-recipe-details>
      </div>
    `;
  }

  static get properties() {
    return {
      recipe: {
        type: String,
        observer: '_recipeChanged'
      },
      recipeDetailsHidden: {
        type: Boolean,
        value: true
      }
    };
  }

  _recipeChanged(newValue, oldValue) {
    console.log("NEW: " + newValue + " OLD: " + oldValue);
    this.recipeDetailsHidden = false;
  }
}

window.customElements.define('brewme-recipes', BrewMeRecipes);
