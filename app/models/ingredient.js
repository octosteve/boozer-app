import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cocktails: DS.hasMany('cocktail', {async: true})
});
