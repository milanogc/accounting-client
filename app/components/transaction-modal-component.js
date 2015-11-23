import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  occurredOn: new Date(),
  descrition: '',
  entries: [],

  init: function() {
    this._addEntry();
    this._addEntry();
    return this._super(...arguments);
  },

  _addEntry: function() {
    var entries = this.get('entries');
    var previousLastEntry = entries.get('lastObject');

    if (previousLastEntry) {
      previousLastEntry.set('last', false);
    }

    entries.pushObject(Ember.Object.create({accountId: '', last: true}));
  },

  showModal: Ember.on('didInsertElement', function() {
    this.$('.modal').modal({show: false}).on('hidden.bs.modal', this /* will be seen as event.data */, function(event) {
      event.data.set('showModal', false);
    });
  }),

  showModalChanged: Ember.observer('showModal', function() {
    if (this.get('showModal')) {
      this.$('.modal').modal('show');
    }
  }),

  actions: {
    addEntry: function() {
      this._addEntry();
    },

    post: function() {
      /*var store = this.get('store');
      var transaction = store.createRecord('transaction', {
        occurredOn: this.get('occurredOn'),
        description: this.get('description'),
        entries: this.get('entries')
      });
      transaction.save();*/
      console.log('ACTION POST COMPONENT');
      this.sendAction();
    }
  }
});
