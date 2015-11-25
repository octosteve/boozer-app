import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cocktails', function() {
    this.route('cocktail', {path: ":cocktail_id"}, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('loading');
  this.route('ingredients', function() {
    this.route('ingredient', {
      path: ':ingredient_id'
    });
  });
});

export default Router;
