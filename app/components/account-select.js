import Ember from 'ember';

function createTreeForSelect2(account) {
  var children = [];
  account.get('children').forEach(function(child) {
    children.push({
      id: child.get('id'),
      text: child.get('name'),
      children: createTreeForSelect2(child)
    });
  });
  return children; /* [{id, text, children}*] */
}

export default Ember.Component.extend({
  tagName: "input",
  classNames: ["form-control"],
  didInsertElement: function() {
    this._select = this.$().select2({
      dropdownAutoWidth: true,
      data: createTreeForSelect2(this.get('rootAccount'))
    });
  }
});
