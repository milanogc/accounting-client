import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "input",
  classNames: ["form-control"],
  didInsertElement: function() {
    var data = [
      {id: "2", name: "2 - Gastos", children: [
        {id: "2.1", name: "2.1 - DESPESA OPERACIONAL FIXA", children: [
          {id: "2.1.1", name: "2.1.1 - PESSOAL", children: [
            {id: "2.1.1", name: "2.1.1 - PESSOAL"},
            {id: "2.1.1.1", name: "2.1.1.1 - GERENCIA/ADMINSTRATIVO", children: [
              {id: "2.1.1.1.1", name: "2.1.1.1.1 - SALÁRIOS"},
              {id: "2.1.1.1.2", name: "2.1.1.1.2 - DIVIDENDOS / COMISSÕES /BONUS"},
              {id: "2.1.1.1.3", name: "2.1.1.1.3 - INSS"},
              {id: "2.1.1.1.4", name: "2.1.1.1.4 - FGTS"}
            ]}
          ]}
        ]}
      ]}
    ];

    var self = this;

    this._select = this.$().select2({
      dropdownAutoWidth: true,
      data: function() {
        var rootAccount = self.get('account');
        return {results: [rootAccount.toJSON()], text: "name"};

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