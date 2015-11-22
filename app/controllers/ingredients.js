import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["q"],
  q: null,

  filteredResults: Ember.computed('model.@each.name', 'q', function(){
    let collection = this.get('model');
    let query = this.get('q');
    if(query){
      let pattern = new RegExp(`^.*?${query}.*?$`,"i");
      return collection.filter(c => c.get("name").match(pattern));
    } else {
      return collection;
    }
  }),
  resetQuery(){
    this.set('q', null);
  }
});
