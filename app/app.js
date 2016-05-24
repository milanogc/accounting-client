import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
// import Pretender from 'pretender';
//
// function configurePretender() {
//   let root = {
//     id: 'ROOT',
//     name: 'Root',
//     createdOn: null,
//     description: null,
//     children: [
//       {
//         name: 'Asset',
//         createdOn: null,
//         description: null,
//         children: [
//           {
//             name: 'Pocket',
//             createdOn: null,
//             description: null,
//             children: []
//           },
//           {
//             name: 'Checking account',
//             createdOn: null,
//             description: null,
//             children: [{
//                 name: 'Bradesco',
//                 createdOn: null,
//                 description: null,
//                 children: []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         name: 'Liability',
//         createdOn: null,
//         description: null,
//         children: [
//           {
//             name: 'Credit card',
//             createdOn: null,
//             description: null,
//             children: [
//               {
//                 name: 'Mastercard',
//                 createdOn: null,
//                 description: null,
//                 children: [
//                   {
//                     name: 'Santander Free',
//                     createdOn: null,
//                     description: null,
//                     children: []
//                   },
//                   {
//                     name: 'Nubank',
//                     createdOn: null,
//                     description: null,
//                     children: []
//                   }
//                 ]
//               },
//               {
//                 name: 'Visa',
//                 createdOn: null,
//                 description: null,
//                 children: [
//                   {
//                     name: 'Santander Free',
//                     createdOn: null,
//                     description: null,
//                     children: []
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//       {
//         name: 'Equity',
//         createdOn: null,
//         description: null,
//         children: []
//       }
//     ]
//   };
//
//   function Accounts(rootOfInitialAccounts) {
//     function createAccountsFromTree(root) {
//       let accounts = [];
//
//       function createAccount(root, parent) {
//         let account = {
//           id: root.id || String(accounts.length + 1),
//           name: root.name,
//           parent: parent,
//           children: []
//         };
//
//         accounts.push(account);
//
//         for (let child of root.children) {
//           account.children.push(createAccount(child, account.id));
//         }
//
//         return account.id;
//       }
//
//       createAccount(root, null);
//       return accounts;
//     }
//
//     let accounts = createAccountsFromTree(rootOfInitialAccounts);
//
//     this.allAccounts = function() {
//       return accounts;
//     };
//
//     this.addAccount = function addAccount(newAccount) {
//       newAccount.id = String(accounts.length + 1);
//       accounts.push(newAccount);
//       accounts.find(account => account.id === newAccount.parent).children.push(newAccount.id);
//     };
//
//     this.findAccountOfId = function(id) {
//       return accounts.find(account => account.id === id);
//     };
//   }
//
//   function Transactions(accounts) {
//     let entries = [];
//     let transactions = [];
//
//     this.addTransaction = function(transaction) {
//       transaction.id = String(transactions.length + 1);
//       transactions.push(transaction);
//       let i = 0;
//
//       for (let entry of transaction.entries) {
//         entry.id = transaction.id + "" + i++;
//         entries.push({entry: entry, transaction: transaction});
//       }
//     };
//
//     this.entriesOfAccount = function(id) {
//       function ancestor(account) {
//         if (!account) {
//           return false;
//         }
//
//         if (account.id === id) {
//           return true;
//         }
//
//         return ancestor(accounts.findAccountOfId(account.parent));
//       }
//
//       let filteredEntries = [];
//
//       for (let entry of entries) {
//         if (ancestor(accounts.findAccountOfId(entry.entry.account))) {
//           filteredEntries.push(Ember.assign({}, entry.entry, entry.transaction));
//         }
//       }
//
//       return filteredEntries;
//     };
//   }
//
//   let accounts = new Accounts(root);
//   let transactions = new Transactions(accounts);
//
//   this.get('http://localhost:8080/accounts', function(/*request*/) {
//     return [200, {"Content-Type": "application/json"}, JSON.stringify({
//       "accounts": accounts.allAccounts()
//     })];
//   });
//
//   this.post('http://localhost:8080/accounts', request => {
//     let newAccount = JSON.parse(request.requestBody).account;
//     accounts.addAccount(newAccount);
//     return [201, {"Content-Type": "application/json"}, JSON.stringify({
//       "account": newAccount
//     })];
//   });
//
//   this.get('http://localhost:8080/accounts/:id', request => {
//     let account = accounts.findAccountOfId(request.params.id);
//     return [200, {"Content-Type": "application/json"}, JSON.stringify({
//       "account": account
//     })];
//   });
//
//   this.get('http://localhost:8080/entries', request => {
//     let entries = [];
//     let accountId = request.queryParams['filter[account]'];
//
//     if (accountId !== undefined) {
//       entries = transactions.entriesOfAccount(accountId);
//     }
//
//     return [200, {"Content-Type": "application/json"}, JSON.stringify({
//       "entries": entries
//     })];
//   });
//
//   this.post('http://localhost:8080/transactions', request => {
//     let data = JSON.parse(request.requestBody);
//     let transaction = data.transaction;
//     transactions.addTransaction(transaction);
//     return [201, {"Content-Type": "application/json"}, JSON.stringify({
//       "transaction": transaction
//     })];
//   });
// }
//
// /*let server = */ new Pretender(configurePretender);

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: false,

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: false
});

loadInitializers(App, config.modulePrefix);

export default App;
