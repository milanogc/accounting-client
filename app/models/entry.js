import DS from 'ember-data';

// https://github.com/lytics/ember-data.model-fragments

let Entry = /*DS.ModelFragment.extend*/ DS.Model.extend({
  accountId: DS.attr('string'),
  amount: DS.attr('number')
});

export default Entry;
