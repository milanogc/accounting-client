import Ember from 'ember';

function createTreeForSelect2(account) {
  return {
    id: account.get('id'),
    text: account.get('name'),
    children: account.get('children').map(child => createTreeForSelect2(child)),
    record: account // link to the ember-data's managed object
  };
}

export default Ember.Component.extend({
  tagName: "input",
  classNames: ["form-control"],

  didInsertElement() {
    this._select = this.$()
      .select2({
        dropdownAutoWidth: true,
        data: [createTreeForSelect2(this.get('rootAccount'))]
      })
      .on("change", Ember.run.bind(this, function(event) {
        this.set('account', event.added.record);
      }))
      .val(this.get('account.id'));
  }
});
