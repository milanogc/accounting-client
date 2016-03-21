import DS from 'ember-data';

let Entry = DS.Model.extend({
  account: DS.belongsTo('account', {async: true}),
  amount: DS.attr('number'),
  occurredOn: DS.attr('date') // alias of transaction.occurredOn (read only)
});

export default Entry;
