define(['jquery', 'underscore', 'backbone', 'views/default', 'views/page'],
function ($, _, Backbone, DefaultView, PageView) {
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

    siteRouter.on('route:pageAction', function(id){
      var pageView = new PageView(id);
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
