import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('drunks', function() {
        this.route('add');
        this.resource('detail', { path: ':drunk_id' }, function() {
            this.route('edit');
            this.route('delete');
        });
    });
    this.route('login');
});

export default Router;
