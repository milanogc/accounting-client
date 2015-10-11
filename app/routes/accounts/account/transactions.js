import Ember from 'ember';

// http://emberigniter.com/load-multiple-models-single-route/#rsvp-hash-to-the-rescue:7f3cf4d8f2178a468d49396e07502eab

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      model: this.modelFor('accounts.account'),
      rootAccount: this.store.findRecord('account', 1)
    });
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  }
});
