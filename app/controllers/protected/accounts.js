import Ember from 'ember';

export default Ember.Controller.extend({
  showAccountModal: false,

  themes: {
    name: 'proton',
    responsive: true
  },

  dataForAccountTree: Ember.computed('model.accounts', function() {
    return this.get('model.accounts').map(account => {
      return {
        id: account.get('id'),
        parent: account.get('parent.id') || '#',
        text: `${account.get('name')}: ${account.get('balance')}`,
        state: {opened : true}
      };
    });
  }),

  actions: {
    showAccountModal() {
      this.set('showAccountModal', true);
    }
  }
});
