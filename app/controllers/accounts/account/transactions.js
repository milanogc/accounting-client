import Ember from 'ember';

export default Ember.Controller.extend({
  showTransactionModal: false,

  actions: {
    showTransactionModal: function() {
      this.set('showTransactionModal', true);
    }
  }
});
