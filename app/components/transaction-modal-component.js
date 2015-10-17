import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  entries: [Ember.Object.create({last: false}), Ember.Object.create({last: true})],
  actions: {
    addEntry: function() {
      this.get('entries').get('lastObject').set('last', false);
      this.get('entries').pushObject(Ember.Object.create({last: true}));
    },

    post: function() {
      var store = this.get('store');
      var transaction = store.createRecord('transaction', {
        occurredOn: new Date(),
        description: 'Test transaction'
      });
      transaction.save();
    }
  }
});
