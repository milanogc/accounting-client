import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Pretender from 'pretender';

let root = {
  name: 'Root',
  createdOn: null,
  description: null,
  children: [
    {
      name: 'Asset',
      createdOn: null,
      description: null,
      children: [
        {
          name: 'Pocket',
          createdOn: null,
          description: null,
          children: []
        },
        {
          name: 'Checking account',
          createdOn: null,
          description: null,
          children: [{
              name: 'Bradesco',
              createdOn: null,
              description: null,
              children: []
            }
          ]
        }
      ]
    },
    {
      name: 'Liability',
      createdOn: null,
      description: null,
      children: [
        {
          name: 'Credit card',
          createdOn: null,
          description: null,
          children: [
            {
              name: 'Mastercard',
              createdOn: null,
              description: null,
              children: [
                {
                  name: 'Santander Free',
                  createdOn: null,
                  description: null,
                  children: []
                },
                {
                  name: 'Nubank',
                  createdOn: null,
                  description: null,
                  children: []
                }
              ]
            },
            {
              name: 'Visa',
              createdOn: null,
              description: null,
              children: [
                {
                  name: 'Santander Free',
                  createdOn: null,
                  description: null,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Equity',
      createdOn: null,
      description: null,
      children: []
    }
  ]
};

function createAccountsFromTree(root) {
  let accounts = [];

  function createAccount(root) {
    let account = {
      id: accounts.length + 1,
      name: root.name,
      children: []
    };

    accounts.push(account);

    for (let child of root.children) {
      account.children.push(createAccount(child));
    }

    return account.id;
  }

  createAccount(root);
  return accounts;
}

/*let server = */new Pretender(function() {
  let accounts = createAccountsFromTree(root);

  function createAccount(newAccount) {
    newAccount.id = accounts.length + 1;
    newAccount.parent = parseInt(newAccount.parent);
    accounts.push(newAccount);
    accounts.find(account => account.id === newAccount.parent).children.push(newAccount.id);
  }

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
    let data = JSON.parse(request.requestBody);
    let newAccount = data.account;
    createAccount(newAccount);
    return [201, {"Content-Type": "application/json"}, JSON.stringify({"account": newAccount})];
  });

  this.get('/accounts/:id', function(request) {
    let result = accounts.find(function(account) {
      return account.id === parseInt(request.params.id);
    });
    return [200, {"Content-Type": "application/json"}, JSON.stringify({"account": result})];
  });

  this.get('/accounts/:id/entries', function(request) {
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
