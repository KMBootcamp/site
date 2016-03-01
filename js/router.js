define(['jquery', 'underscore', 'backbone', 'views/default', 'views/about', 'views/contact'],
function ($, _, Backbone, DefaultView, AboutView, ContactView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about': 'aboutAction',
      'contact': 'contactAction',
      '*other': 'defaultAction'
    }
  });
  var initialize = function () {
    var siteRouter = new SiteRouter();
    siteRouter.on('route:defaultAction', function(){
      var defaultView = new DefaultView();
      defaultView.render();
    });

    siteRouter.on('route:aboutAction', function(){
      var aboutView = new AboutView();
      aboutView.render();
      console.log('about');
    });

    siteRouter.on('route:contactAction', function(){
      var contactView = new ContactView();
      contactView.render();
      console.log('concact');
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
