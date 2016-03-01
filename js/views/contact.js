define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/contact.mustache'],
 function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var ContactView = Backbone.View.extend({
    el: $('.middle'),
    data: {},

    initialize: function() {
      this.data = {
        title: 'Contact me',
        content: '@ kristians.muhametovs@gmail.com'
      };
    },

    render: function(){
      var compiledTemplate = Mustache.render( pageTemplate, this.data );
      this.$el.html( compiledTemplate );
    }
  });
  return ContactView;
});
