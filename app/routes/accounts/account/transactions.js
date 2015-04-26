import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('model', this.modelFor('accounts.account'));
    controller.set('rootAccount', this.store.find('account', 1));
  }
});
