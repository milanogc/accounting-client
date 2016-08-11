import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('protected', {path: '/'}, function() {
    this.route('accounts', function() {
      this.route('account', {path: '/:account_id'});
    });
  });
  this.route('login');
});

export default Router;
