define(['jquery', 'underscore', 'backbone', 'views/default', 'views/page', 'views/form', 'views/deleteForm'],
function ($, _, Backbone, DefaultView, PageView, FormView, DeleteFormView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about': 'aboutAction',
      'contact': 'contactAction',
      'form': 'formAction',
      'deleteForm': 'deleteFormAction',
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

    siteRouter.on('route:formAction', function(){
        var formView = new FormView();
    });

    siteRouter.on('route:deleteFormAction', function(){
      var deleteFormView = new DeleteFormView();
    })

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
