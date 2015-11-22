import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('ingredient');
  },
  resetController(controller){
    controller.resetQuery();
  }
});
