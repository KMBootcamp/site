define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/form.mustache'],
 function ($, _, Backbone, Mustache, PageModel, formTemplate) {
  var FormView = Backbone.View.extend({
    el: $('.content-left'),
    model: {},

    events:{
      "click #savebtn" : "saveAction",
    },

    initialize: function() {
      this.render();
    },

    saveAction: function(e){
      e.preventDefault();
      var newTitle = $('#title').val();
      var newContent =  $('#content').val();
      var pageModel = new PageModel({
        title: newTitle,
        content: newContent,
        image: 'https://source.unsplash.com/random/300x150'
      });
      pageModel.save();
    },

    render: function(){
      var compiledTemplate = Mustache.render(formTemplate, this.data);
      this.$el.html(compiledTemplate);
    }
  });
  return FormView;
});
