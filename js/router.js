define(['jquery', 'underscore', 'backbone', 'views/index'],
function ($, _, Backbone, IndexView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      '*other': 'defaultAction'
    }
  });
  var initialize = function () {
    var siteRouter = new SiteRouter();
    siteRouter.on('route:defaultAction', function(){
      console.log('default');
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
