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
     name: 'Accounts',
     createdOn: null,
     description: null,
     parentAccount: null,
     childAccounts: [2, 3, 5]
   },
   {
     id: 2,
     name: 'Asset',
     createdOn: null,
     description: null,
     parentAccount: 1,
     childAccounts: [4]
   },
   {
     id: 3,
     name: 'Liability',
     createdOn: null,
     description: null,
     parentAccount: 1,
     childAccounts: [6]
   },
   {
     id: 4,
     name: 'Pocket',
     createdOn: null,
     description: null,
     parentAccount: 2,
     childAccounts: []
   },
   {
     id: 5,
     name: 'Equity',
     createdOn: null,
     description: null,
     parentAccount: 1,
     childAccounts: []
   },
   {
     id: 6,
     name: 'Credit card',
     createdOn: null,
     description: null,
     parentAccount: 3,
     childAccounts: [7]
   },
   {
     id: 7,
     name: 'Mastercard',
     createdOn: null,
     description: null,
     parentAccount: 6,
     childAccounts: [8]
   },
   {
     id: 8,
     name: 'Santander Free',
     createdOn: null,
     description: null,
     parentAccount: 7,
     childAccounts: []
   },
  ]
});

export default Account;