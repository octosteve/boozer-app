import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["q"],
  q: null,

  filteredResults: Ember.computed('model.@each.name', 'q', function(){
    let cocktails = this.get('model');
    let query = this.get('q');
    if(query){
      let pattern = new RegExp(`^.*?${query}.*?$`,"i");
      return cocktails.filter(c => c.get("name").match(pattern));
    } else {
      return cocktails;
    }
  })
});
