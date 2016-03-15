import Ember from 'ember';

export default Ember.Controller.extend({
  showAccountModal: false,

  actions: {
    showAccountModal() {
      this.set('showAccountModal', true);
    }
  }
});
