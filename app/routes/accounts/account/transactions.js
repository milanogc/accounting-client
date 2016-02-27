import Ember from 'ember';

// http://emberigniter.com/load-multiple-models-single-route/#rsvp-hash-to-the-rescue:7f3cf4d8f2178a468d49396e07502eab

export default Ember.Route.extend({
  model: function() {
    var model = this.modelFor('accounts.account');
    var entries = Ember.A();

    $.getJSON('/accounts/' + model.id + '/entries').then(data => {
      for (var entry of data.entries) {
        entries.addObject(entry);
      }
    });

    return Ember.RSVP.hash({
      model: model,
      rootAccount: this.store.findRecord('account', 1),
      entries: entries
    });
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  }
});
