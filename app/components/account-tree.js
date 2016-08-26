import Ember from 'ember';

export default Ember.Component.extend({
  jstreeActionReceiver: null,
  routing: Ember.inject.service('-routing'),
  jstreeThemes: {
    name: 'proton',
    responsive: true
  },

  dataForAccountTree: Ember.computed('accounts', function() {
    return this.get('accounts').map(account => {
      return {
        id: account.get('id'),
        parent: account.get('parent.id') || '#',
        text: `${account.get('name')}: ${account.get('balance')}`,
        state: {opened : true}
      };
    });
  }),

  actions: {
    /**
     * Assures that the node is shown selected when the nested route is
     * accessed directly through the address bar.
     */
    treeDidBecomeReady() {
      const model = Ember.getOwner(this).lookup('route:protected.accounts.account').currentModel;

      if (model) {
        this.get('jstreeActionReceiver').send('selectNode', model.get('id'));
      }
    },

    /**
     * When the account is changed the route should change.
     */
    accountDidChange(data) {
      this.get("routing").transitionTo('protected.accounts.account.entries', [data.node.original.id]);
    }
  }
});
