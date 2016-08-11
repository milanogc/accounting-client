import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      const credentials = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:jwt', credentials);
    }
  }
});
