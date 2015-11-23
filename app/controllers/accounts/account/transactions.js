import Ember from 'ember';

export default Ember.Controller.extend({
  showModal: false,

  actions: {
    showNewTransactionModal: function() {
      this.toggleProperty('showModal');
    }
  }
});
