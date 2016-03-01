define(['underscore', 'backbone'], function (_, Backbone) {
  var PageModel = Backbone.Model.extend({
    urlRoot: '/api/page'
  });
  return PageModel;
});
