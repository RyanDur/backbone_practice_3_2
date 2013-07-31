Bbprac32.Collections.Repos = Backbone.Collection.extend({
  url: '/api/repos',
  model: Bbprac32.Models.Repo,

  comparator: function(a,b) {
    return (a.get('updated_at') < b.get('updated_at')) ? 1 : ((a.get('updated_at') > b.get('updated_at')) ? -1 : 0);
  }
});
