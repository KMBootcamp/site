define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache'],
 function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.middle'),
    data: {},

    initialize: function() {
      this.data = {
        title: 'Virsraksts',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      };
    },

    render: function(){
      var compiledTemplate = Mustache.render( pageTemplate, this.data );
      this.$el.html( compiledTemplate );
    }
  });
  return DefaultView;
});
