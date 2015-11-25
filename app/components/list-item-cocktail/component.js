import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "li",
  actions: {
    doTheThing(cocktail){
      this.attrs.selectCocktail(cocktail);
    }
  }
});
