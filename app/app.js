import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Pretender from 'pretender';

/*let server = */new Pretender(function() {
  let accounts = [
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
      children: [4, 12]
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
      id: 12,
      name: 'Checking account',
      createdOn: null,
      description: null,
      parent: 2,
      children: [13]
    },
    {
      id: 13,
      name: 'Bradesco',
      createdOn: null,
      description: null,
      parent: 12,
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
      children: [7, 10]
    },
    {
      id: 7,
      name: 'Mastercard',
      createdOn: null,
      description: null,
      parent: 6,
      children: [8, 9]
    },
    {
      id: 8,
      name: 'Santander Free',
      createdOn: null,
      description: null,
      parent: 7,
      children: []
    },
    {
      id: 9,
      name: 'Nubank',
      createdOn: null,
      description: null,
      parent: 7,
      children: []
    },
    {
      id: 10,
      name: 'Visa',
      createdOn: null,
      description: null,
      parent: 6,
      children: [11]
    },
    {
      id: 11,
      name: 'Santander Free',
      createdOn: null,
      description: null,
      parent: 10,
      children: []
    },
  ];

  let entries = [];
  let transactions = [];

  function newTransaction(transaction) {
    for (let entry of transaction.entries) {
      entries.push({entry: entry, transaction: transaction});
    }

    transaction.id = transactions.length + 1;
    transactions.push(transaction);
  }

  this.get('/accounts', function(/*request*/) {
    return [200, {"Content-Type": "application/json"}, JSON.stringify({"accounts": accounts})];
  });

  this.post('/accounts', function(request) {
    var data = JSON.parse(request.requestBody);
    var account = data.account;
    return [201, {"Content-Type": "application/json"}, JSON.stringify({"account": account})];
  });

  this.get('/accounts/:id', function(request) {
    let result = accounts.find(function(account) {
      return account.id === parseInt(request.params.id);
    });
    return [200, {"Content-Type": "application/json"}, JSON.stringify({"account": result})];
  });

  this.get('/accounts/:id/entries', function(request) {
    let data = JSON.parse(request.requestBody);
    let filteredEntries = [];

    for (let entry of entries) {
      if (entry.entry.accountId === request.params.id) {
        filteredEntries.push(Object.assign({}, entry.entry, entry.transaction));
      }
    }

    return [200, {"Content-Type": "application/json"}, JSON.stringify({
      "entries": filteredEntries
    })];
  });

  this.post('/transactions', function(request) {
    let data = JSON.parse(request.requestBody);
    let transaction = data.transaction;
    newTransaction(transaction);
    return [201, {"Content-Type": "application/json"}, JSON.stringify({"transaction": transaction})];
  });
});

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
