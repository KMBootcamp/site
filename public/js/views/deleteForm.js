define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/deleteForm.mustache'],
 function ($, _, Backbone, Mustache, PageModel, deleteFormTemplate) {
  var DeleteFormView = Backbone.View.extend({
    el: $('.content-right'),
    model: {},

    events:{
      "click #deletebtn" : "saveAction",
    },

    initialize: function() {
      this.render();
    },

    saveAction: function(e){
      e.preventDefault();
      var identifikators = $('#identifikators').val();
      var pageModel = new PageModel({
        id: identifikators,
      });
      pageModel.destroy();
    },

    render: function(){
      var compiledTemplate = Mustache.render(deleteFormTemplate, this.data);
      this.$el.html(compiledTemplate);
    }
  });
  return DeleteFormView;
});
