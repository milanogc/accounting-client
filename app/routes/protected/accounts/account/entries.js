import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    const account = this.modelFor('protected.accounts.account');
    return Ember.RSVP.hash({
      rootAccount: this.modelFor('protected.accounts').rootAccount,
      account: account,
      entries: this.store.query('entry',  {filter: {account: account.get('id')}})
    });
  },

  actions: {
    /**
     * After posting a transaction refresh the route to exhibit the new data.
     */
    refreshModel() {
      this.refresh();
    }
  }
});
