import Ember from 'ember';

// http://emberigniter.com/load-multiple-models-single-route/#rsvp-hash-to-the-rescue:7f3cf4d8f2178a468d49396e07502eab

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      account: this.store.peekRecord('account', params.account_id),
      rootAccount: this.modelFor('accounts'),
      entries: this.store.query('entry',  {filter: {account: params.account_id}})
    });
  }
});
