import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  	this.store.find('account');
    return this.store.find('account', 1);
  }
});
