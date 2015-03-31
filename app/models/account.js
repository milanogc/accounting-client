import DS from 'ember-data';

var Account = DS.Model.extend({
  name: DS.attr('string'),
  createdOn: DS.attr('date'),
  description: DS.attr('string'),
  parentAccount: DS.belongsTo('account', {inverse: 'childAccounts'}),
  childAccounts: DS.hasMany('account', {inverse: 'parentAccount'})
});

Account.reopenClass({
  FIXTURES: [
   {
     id: 1,
     name: 'Root',
     createdOn: null,
     description: null,
     parentAccount: null,
     childAccounts: [2, 3]
   },
   {
     id: 2,
     name: 'Asset',
     createdOn: null,
     description: null,
     parentAccount: 1,
     childAccounts: []
   },
   {
     id: 3,
     name: 'Liability',
     createdOn: null,
     description: null,
     parentAccount: 1,
     childAccounts: []
   }
  ]
});

export default Account;