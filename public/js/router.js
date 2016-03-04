define(['jquery', 'underscore', 'backbone', 'views/default'],
function ($, _, Backbone, DefaultView, AboutView, ContactView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about': 'aboutAction',
      'contact': 'contactAction',
      'page/:id': 'pageAction',
      '*other': 'defaultAction'
    }
  });
  var initialize = function () {
    var siteRouter = new SiteRouter();
    var defaultView = new DefaultView();

    siteRouter.on('route:defaultAction', function(){
      defaultView.render('main');
    });

    siteRouter.on('route:aboutAction', function(){
      defaultView.render('about');
    });

    siteRouter.on('route:contactAction', function(){
      defaultView.render('contact');
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
