import Ember from 'ember';

export default Ember.Controller.extend({
  showTransactionModal: false,

  actions: {
    showTransactionModal() {
      this.set('showTransactionModal', true);
    }
  }
});
