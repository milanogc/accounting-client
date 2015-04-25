import DS from 'ember-data';

var Transaction = DS.Model.extend({
  occurredOn: DS.attr('date'),
  /*entries: DS.hasMany('entry'),*/
  description: DS.attr('string')
});

Transaction.reopenClass({
  FIXTURES: [
  ]
});

export default Transaction;
