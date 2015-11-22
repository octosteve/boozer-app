import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectCocktail(cocktail){
      this.set("selectedCocktail", cocktail);
    }
  }
});
