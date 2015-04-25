import Ember from 'ember';

function createTree(account) {
  var children = [];
  account.get('children').forEach(function(child) {
    children.push({
      id: child.get('id'),
      name: child.get('name'),
      children: createTree(child)
    });
  });
  return children; /* [{id, name, children}*] */
}

export default Ember.Component.extend({
  tagName: "input",
  classNames: ["form-control"],
  didInsertElement: function() {
    var self = this;

    this._select = this.$().select2({
      dropdownAutoWidth: true,
      data: function() {
        var rootAccount = self.get('account');
        return {results: createTree(rootAccount), text: "name"};
      },
      formatSelection: function(item) {
        return item.name;
      },
      formatResult: function(item) {
        return item.name;
      }
    });
  }
});
