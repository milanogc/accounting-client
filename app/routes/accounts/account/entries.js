import Ember from 'ember';

// http://emberigniter.com/load-multiple-models-single-route/#rsvp-hash-to-the-rescue:7f3cf4d8f2178a468d49396e07502eab

export default Ember.Route.extend({
  model: function() {
    let model = this.modelFor('accounts.account');
    let entries = Ember.A();
    let host = this.store.adapterFor('application').get('host');

    /*this.$.getJSON(host + '/accounts/' + model.id + '/entries').then(data => {
      for (var entry of data.entries) {
        entries.addObject(entry);
      }
    });*/

    return Ember.RSVP.hash({
      model: model,
      rootAccount: this.modelFor('accounts'),
      entries: entries
    });
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  }
});
