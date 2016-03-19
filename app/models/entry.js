import DS from 'ember-data';

let Entry = DS.Model.extend({
  account: DS.belongsTo('account'),
  amount: DS.attr('number')
});

export default Entry;
