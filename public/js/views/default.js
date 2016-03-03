define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache',
 'text!/templates/header.mustache', 'text!/templates/navigation.mustache'],
 function ($, _, Backbone, Mustache, PageModel, pageTemplate, headerTemplate, navigationTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.middle'),
    data: {},
    elHeader: $('.header'),
    headerData: {},
    elNavigation: $('.menu--items'),
    navigationData: {},

    initialize: function() {
      this.data = {
        main: {
          title: 'main title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        about: {
          title: 'about title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        contact: {
          title: 'contact title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          buttons: '<button class="navBtn">Main</button> \n\
          <button class="navBtn" onclick="window.location.href=\'#about\'">About Me</button>\n\
          <button class="navBtn" onclick="window.location.href=\'#contact\'">Contant Me</button>'
        },
        about: {
          buttons: '<button class="navBtn" onclick="window.location.href=\'#main\'">Main</button> \n\
          <button class="navBtn">About Me</button>\n\
          <button class="navBtn" onclick="window.location.href=\'#contact\'">Contant Me</button>'
        },
        contact: {
          buttons: '<button class="navBtn" onclick="window.location.href=\'#main\'">Main</button> \n\
          <button class="navBtn" onclick="window.location.href=\'#about\'">About Me</button>\n\
          <button class="navBtn">Contant Me</button>'
        }
      }

    },

    render: function(pageType){
      var compiledTemplate = Mustache.render( pageTemplate, this.data[pageType] );
      this.$el.html( compiledTemplate );

      var compiledHeaderTemplate = Mustache.render ( headerTemplate, this.headerData[pageType]);
      this.elHeader.html( compiledHeaderTemplate );

      var compiledNavigationTemplate = Mustache.render(navigationTemplate, this.navigationData[pageType]);
      this.elNavigation.html(compiledNavigationTemplate);
    }
  });
  return DefaultView;
});
