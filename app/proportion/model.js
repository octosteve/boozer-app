import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('string'),
  ingredient: DS.attr('string')
});
