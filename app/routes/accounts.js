import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.findAll('account'); // rendering improvement... TODO find better way
    return this.store.find('account', 1);
  }
});
