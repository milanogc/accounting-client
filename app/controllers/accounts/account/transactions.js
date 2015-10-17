import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    post: function() {
      var transaction = this.store.createRecord('transaction', {
        occurredOn: this.get('occurredOn'),
        entries: [],
        description: 'description'
      });

      transaction.save();
    }
  }
});
