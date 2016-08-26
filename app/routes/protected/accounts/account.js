import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// http://emberigniter.com/load-multiple-models-single-route/#rsvp-hash-to-the-rescue:7f3cf4d8f2178a468d49396e07502eab

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model({account_id}) {
      return this.store.peekRecord('account', account_id);
  },

  afterModel(account/*, transition*/) {
    if (!account) {
      this.transitionTo('protected.accounts');
    }
  }
});
