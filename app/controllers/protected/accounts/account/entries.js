import Ember from 'ember';

export default Ember.Controller.extend({
  showTransactionModal: false,
  chartType: 'line',

  chartData: Ember.computed("model.entries", function() {
    const entries = this.get('model.entries');
    return {
      labels: entries.mapBy('occurredOn'),
      datasets: [{
        data: entries.mapBy('sum')
      }]
    };
  }),

  chartOptions: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          //unit: 'month'
        }
      }]
    },
    legend: {
      display: false
    },
    animation: {
        duration: 0
    }
  },

  _createTransaction() {
    let transaction = this.get('store').createRecord('transaction', {
      occurredOn: new Date()
    });
    let entries = transaction.get('entries');
    // one transaction has at least two entries:
    entries.createRecord({});
    entries.createRecord({last: true});
    return transaction;
  },

  actions: {
    showTransactionModal() {
      this.set('transaction', this._createTransaction()); // create
      this.set('showTransactionModal', true);
    },

    cancel() {
      this.set('showTransactionModal', false);
      this.get('transaction').rollbackAttributes(); // destroy
    },

    post() {
      const controller = this;
      this.get('transaction').save().then(() => {
          controller.send('refreshModel');
      });
      this.set('showTransactionModal', false);
    }
  }
});
