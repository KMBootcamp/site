define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache'],
 function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.content-middle'),
    collection: {},

    initialize: function() {
      this.collection = new PagesCollection();
      this.collection.on('sync', this.render, this);
      this.collection.fetch();
    },

    render: function(pageType){
      this.data = this.collection.toJSON();
      var compiledTemplate = Mustache.render(pageTemplate, this);
      this.$el.html(compiledTemplate);
    }
  });
  return DefaultView;
});
