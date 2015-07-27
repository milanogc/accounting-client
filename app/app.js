import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import Pretender from 'pretender';

/*var server = */new Pretender(function() {
  var accounts = [
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
  ];

  this.get('/accounts', function(/*request*/) {
    return [200, {"Content-Type": "application/json"}, JSON.stringify({"accounts": accounts})];
  });

  this.get('/accounts/:id', function(request) {
    var result = accounts.find(function (account) {
      return account.id === parseInt(request.params.id);
    });
    return [200, {"Content-Type": "application/json"}, JSON.stringify({"account": result})];
  });
});

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
