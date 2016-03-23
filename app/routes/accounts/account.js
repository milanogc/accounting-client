import Ember from 'ember';

// http://emberigniter.com/load-multiple-models-single-route/#rsvp-hash-to-the-rescue:7f3cf4d8f2178a468d49396e07502eab

export default Ember.Route.extend({
  model(params) {
    let account = this.store.peekRecord('account', params.account_id);
    let entries = this.store.query('entry',  {filter: {account: account.get('id')}});

    return Ember.RSVP.hash({
      account: account,
      rootAccount: this.modelFor('accounts'),
      entries: entries
    });
  }
});
