import DS from 'ember-data';

let Entry = DS.Model.extend({
  account: DS.belongsTo('account'),
  amount: DS.attr('number'),
  occurredOn: DS.attr('date'), // alias of transaction.occurredOn (read only)
  description: DS.attr('string'), // alias of transaction.description (read only)
  sum: DS.attr('number'), // (read only)
});

export default Entry;
