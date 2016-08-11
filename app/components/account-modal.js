import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  name: '',
  description: '',
  parentAccount: null,
  actions: {
    cancel() {
      this.set('show', false);
      this.set('name', '');
      this.set('description', '');
      this.set('parentAccount', null);
    },

    submit() {
      if (!this.get('name')) {
        return;
      }

      let store = this.get('store');
      let account = store.createRecord('account', {
        name: this.get('name'),
        description: this.get('description'),
        parent: store.peekRecord('account', this.get('parentAccount.id'))
      });
      account.save();
      this.set('show', false);
      this.set('name', '');
      this.set('description', '');
      this.set('parentAccount', null);
    }
  }
});
