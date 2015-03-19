import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('year', {path: 'year/:year_id'});
    this.route('show', {path: 'show/:show_id'});
});

export default Router;
