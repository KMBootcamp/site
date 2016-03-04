define(['jquery', 'underscore', 'backbone', 'mustache', '/js/collections/pages.js', 'text!/templates/pages.mustache'],
 function ($, _, Backbone, Mustache, PagesCollection, pagesTemplate) {
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
      var compiledTemplate = Mustache.render(pagesTemplate, this);
      this.$el.html(compiledTemplate);
    }
  });

  return DefaultView;

});
