import DS from 'ember-data';

//export default DS.JSONAPIAdapter.extend({
export default DS.RESTAdapter.extend({
  host: 'http://localhost:8080',
});
