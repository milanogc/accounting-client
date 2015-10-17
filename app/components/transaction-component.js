import Ember from 'ember';

export default Ember.Component.extend({
  entries: [Ember.Object.create({last: false}), Ember.Object.create({last: true})],
  actions: {
    addEntry: function() {
      this.get('entries').get('lastObject').set('last', false);
      this.get('entries').pushObject(Ember.Object.create({last: true}));
    }
  }
});
