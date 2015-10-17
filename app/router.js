import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('accounts', function() {
    this.route('account', {path: "/:account_id"}, function() {
      this.route('transactions');
    });
  });
  this.route('transaction');
});
