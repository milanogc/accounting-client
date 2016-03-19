import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addEntry() {
      let entries = this.get('transaction.entries');
      entries.get('lastObject').set('last', undefined);
      entries.createRecord({last: true});
    },

    cancel() {
      this.sendAction('cancel');
    },

    post() {
      this.sendAction('post');
    }
  }
});
