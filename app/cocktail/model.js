import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  instructions: DS.attr('string'),
  source: DS.attr('string'),
  proportions: DS.hasMany('proportion')
});
