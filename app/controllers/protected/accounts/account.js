import Ember from 'ember';

export default Ember.Controller.extend({
  showTransactionModal: false,

  _createTransaction() {
    let transaction = this.get('store').createRecord('transaction', {
      occurredOn: new Date()
    });
    let entries = transaction.get('entries');
    // one transaction has at least two entries:
    entries.createRecord({});
    entries.createRecord({last: true});
    return transaction;
  },

  actions: {
    showTransactionModal() {
      this.set('transaction', this._createTransaction()); // create
      this.set('showTransactionModal', true);
    },

    cancel() {
      this.set('showTransactionModal', false);
      this.get('transaction').rollbackAttributes(); // destroy
    },

    post() {
      this.get('transaction').save(); // persist
      this.set('showTransactionModal', false);
    }
  }
});
