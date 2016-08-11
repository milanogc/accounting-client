import Ember from 'ember';

function createTreeForSelect2(account) {
  var node = {
    id: account.get('id'),
    text: account.get('name'),
    children: [],
    record: account // link to the ember-data's managed object
  };

  account.get('children').forEach(function(child) {
    node.children.push(createTreeForSelect2(child));
  });

  return node; /* {id, text, children} */
}

export default Ember.Component.extend({
  tagName: "input",
  classNames: ["form-control"],

  didInsertElement: function() {
    this._select = this.$().select2({
      dropdownAutoWidth: true,
      data: [createTreeForSelect2(this.get('rootAccount'))]
    });

    this._select.val(this.get('account.id'));

    this._select.on("change", Ember.run.bind(this, function(event) {
      this.set('account', event.added.record);
    }));
  }
});
