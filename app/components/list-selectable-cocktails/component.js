import Ember from 'ember';

export default Ember.Component.extend({
  selectedCocktail: null,
  actions: {
    setCocktail(cocktail){
      this.set('selectedCocktail', cocktail);
    }
  }
});
