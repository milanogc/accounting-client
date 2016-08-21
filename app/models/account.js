import DS from 'ember-data';

let Account = DS.Model.extend({
  name: DS.attr('string'),
  createdOn: DS.attr('date'),
  description: DS.attr('string'),
  parent: DS.belongsTo('account', {inverse: 'children'}),
  children: DS.hasMany('account', {inverse: 'parent'}),
  balance: DS.attr('number'), // (read only)
});

export default Account;
