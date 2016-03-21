import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('account').then(() => {
      return this.store.peekRecord('account', 'ROOT');
    });
  }
});
