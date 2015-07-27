import DS from 'ember-data';

var Account = DS.Model.extend({
  name: DS.attr('string'),
  createdOn: DS.attr('date'),
  description: DS.attr('string'),
  parent: DS.belongsTo('account', {inverse: 'children'}),
  /* TODO the below async should be removed on the upcoming ember 2 */
  children: DS.hasMany('account', {inverse: 'parent', async: true})
});

export default Account;
