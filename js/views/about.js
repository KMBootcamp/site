define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/about.mustache'],
 function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var AboutView = Backbone.View.extend({
    el: $('.middle'),
    data: {},

    initialize: function() {
      this.data = {
        title: 'About me',
        content: 'My name is - Kristians.'
      };
    },

    render: function(){
      var compiledTemplate = Mustache.render( pageTemplate, this.data );
      this.$el.html( compiledTemplate );
    }
  });
  return AboutView;
});
