import Ember from 'ember';

export default Ember.Controller.extend({
  showTransactionModal: false,

  actions: {
    showTransactionModal() {
      let transaction = this.get('store').createRecord('transaction', {
        occurredOn: new Date()
      });
      let entries = transaction.get('entries');
      entries.createRecord({});
      entries.createRecord({last: true});
      this.set('transaction', transaction);
      this.set('showTransactionModal', true);
    },

    cancel() {
      this.set('showTransactionModal', false);
      this.get('transaction').rollbackAttributes();
    },

    post() {
      this.get('transaction').save();
      this.set('showTransactionModal', false);
    }
  }
});
