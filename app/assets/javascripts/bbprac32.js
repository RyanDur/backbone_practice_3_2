window.Bbprac32 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Bbprac32.Routers.Repos();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  Bbprac32.initialize();
});
