import Ember from 'ember';

export default Ember.Component.extend({
  entries: Ember.computed.map('transaction.entries', function(entry) {
    return Ember.ObjectProxy.create({
      content: entry,
      isLast: this.get('transaction.entries.lastObject') === entry
    });
  }),

  actions: {
    addEntry() {
      this.get('transaction.entries').createRecord();
    },

    cancel() {
      this.sendAction('cancel');
    },

    post() {
      this.sendAction('post');
    }
  }
});
