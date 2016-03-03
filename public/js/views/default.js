define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache',
 'text!/templates/header.mustache', 'text!/templates/navigation.mustache'],
 function ($, _, Backbone, Mustache, PageModel, pageTemplate, headerTemplate, navigationTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.middle'),
    elHeader: $('.header'),
    elNavigation: $('.mainItem'),
    data: {},
    headerData: {},
    navigationData: {},

    initialize: function() {
      this.data = {
        main: {
          title: 'main title',
          content: 'main content'
        },
        about: {
          title: 'about title',
          content: 'about content'
        },
        contact: {
          title: 'contact title',
          content: 'contact content'
        },
      };

      this.headerData = {
        main: {
          path: '<a href="#main" class="siteHref">Site</a>'
        },
        about: {
          path: '<a href="#main" class="siteHref">Site</a> / about'
        },
        contact: {
          path: '<a href="#main" class="siteHref">Site</a> / contact'
        }
      };

      this.navigationData = {
        main: {
          navigation: 'Main'
        },
        about: {
          navigation: '<a href="#">Main</a>'
        },
        contact: {
          navigation: '<a href="#">Main</a>'
        }
      };

    },

    render: function(pageType){
      var compiledTemplate = Mustache.render( pageTemplate, this.data[pageType] );
      this.$el.html( compiledTemplate );

      var compiledHeaderTemplate = Mustache.render ( headerTemplate, this.headerData[pageType]);
      this.elHeader.html( compiledHeaderTemplate );

      var compiledNavigationTemplate = Mustache.render( navigationTemplate, this.navigationData[pageType]);
      this.elNavigation.html(compiledNavigationTemplate);

    }
  });
  return DefaultView;
});
