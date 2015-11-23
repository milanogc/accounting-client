import Ember from 'ember';

export default Ember.Component.extend({
  debit: '',
  credit: '',

  creditDisabled: Ember.computed('debit', function() {
    var debit = this.get('debit');

    if (debit.length) {
      this.set('entry.amount', -debit);
    }

    return debit.length;
  }),

  debitDisabled: Ember.computed('credit', function() {
    var credit = this.get('credit');

    if (credit.length) {
      this.set('entry.amount', credit);
    }

    return credit.length;
  })
});
