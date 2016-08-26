import DS from 'ember-data';

export default DS.Model.extend({
  occurredOn: DS.attr('date'),
  description: DS.attr('string'),
  entries: DS.hasMany('entry')
});
