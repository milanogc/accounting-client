import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  /* TODO these functions should be removed on the upcoming ember 2 */
  shouldReloadAll: function() { return false; },
  shouldBackgroundReloadAll: function(/*store, snapshotRecordArray*/) { return true; },
  shouldReloadRecord: function(/*store, snapshot*/) { return true; },
});
