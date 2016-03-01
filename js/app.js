define(['jquery', 'underscore', 'backbone', 'router'],
function ($, _, Backbone, SiteRouter) {
  var initialize = function(){
    SiteRouter.initialize();
  };
  return {
    initialize: initialize
  };
});
