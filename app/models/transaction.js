import DS from 'ember-data';

let Transaction = DS.Model.extend({
  occurredOn: DS.attr('date'),
  description: DS.attr('string'),
  // https://github.com/lytics/ember-data.model-fragments
  // entries: DS.hasManyFragments('entry', { defaultValue: [] })
  entries: DS.attr()
});

export default Transaction;
