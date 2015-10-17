import Ember from 'ember';

export default Ember.Component.extend({
  debit: '',
  credit: '',

  creditDisabled: Ember.computed('debit', function() {
    return this.get('debit').length;
  }),

  debitDisabled: Ember.computed('credit', function() {
    return this.get('credit').length;
  })
});
