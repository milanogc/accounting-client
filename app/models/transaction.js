import DS from 'ember-data';

let Transaction = DS.Model.extend({
  occurredOn: DS.attr('date'),
  description: DS.attr('string'),
  entries: DS.hasMany('entry')
});

export default Transaction;
