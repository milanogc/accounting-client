import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.store.findAll('account');
  },

  model() {
    return this.store.peekRecord('account', 'ROOT');
  }
});
