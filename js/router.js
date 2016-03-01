define(['jquery', 'underscore', 'backbone', 'views/default'],
function ($, _, Backbone, DefaultView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      '*other': 'defaultAction'
    }
  });
  var initialize = function () {
    var siteRouter = new SiteRouter();
    siteRouter.on('route:defaultAction', function(){
      var defaultView = new DefaultView();
      defaultView.render();
      console.log('default');
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
