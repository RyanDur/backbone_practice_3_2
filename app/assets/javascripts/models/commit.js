Bbprac32.Models.Commit = Backbone.Model.extend({
  parse: function(response) {
    var commit = response.commit;
    return commit;
  }
});
