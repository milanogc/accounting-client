import DS from 'ember-data';

var Account = DS.Model.extend({
  name: DS.attr('string'),
  createdOn: DS.attr('date'),
  description: DS.attr('string'),
  parent: DS.belongsTo('account', {inverse: 'children'}),
  children: DS.hasMany('account', {inverse: 'parent'})
});

Account.reopenClass({
  FIXTURES: [
   {
     id: 1,
     name: 'Root',
     createdOn: null,
     description: null,
     parent: null,
     children: [2, 3, 5]
   },
   {
     id: 2,
     name: 'Asset',
     createdOn: null,
     description: null,
     parent: 1,
     children: [4]
   },
   {
     id: 3,
     name: 'Liability',
     createdOn: null,
     description: null,
     parent: 1,
     children: [6]
   },
   {
     id: 4,
     name: 'Pocket',
     createdOn: null,
     description: null,
     parent: 2,
     children: []
   },
   {
     id: 5,
     name: 'Equity',
     createdOn: null,
     description: null,
     parent: 1,
     children: []
   },
   {
     id: 6,
     name: 'Credit card',
     createdOn: null,
     description: null,
     parent: 3,
     children: [7]
   },
   {
     id: 7,
     name: 'Mastercard',
     createdOn: null,
     description: null,
     parent: 6,
     children: [8]
   },
   {
     id: 8,
     name: 'Santander Free',
     createdOn: null,
     description: null,
     parent: 7,
     children: []
   },
  ]
});

export default Account;
