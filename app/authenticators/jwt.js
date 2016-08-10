import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

// http://www.thegreatcodeadventure.com/jwt-authentication-with-rails-ember-part-ii-custom-ember-simple-auth/

export default BaseAuthenticator.extend({
  tokenEndpoint: '/api/',

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(credentials) {
    const data = JSON.stringify({ credentials });
    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };
    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        const { token } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            access_token: token
          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
