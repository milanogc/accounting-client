import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  name: '',
  description: '',
  parent: null,
  actions: {
    cancel() {
      this.set('show', false);
    },

    submit() {
      if (!this.get('name')) {
        return;
      }

      let store = this.get('store');
      let account = store.createRecord('account', {
        name: this.get('name'),
        description: this.get('description'),
        parent: store.peekRecord('account', this.get('parent.id')) // TODO improve it
      });
      account.save();
      this.set('show', false);
    }
  }
});
