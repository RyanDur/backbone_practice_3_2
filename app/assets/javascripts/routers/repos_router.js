Bbprac32.Routers.Repos = Backbone.Router.extend({
  routes: {
    '': 'index',
    'repos/:id': 'show'
  },

  initialize: function() {
    this.repos = new Bbprac32.Collections.Repos();
  },

  index: function() {
    new Bbprac32.Views.ReposIndex({collection: this.repos, el: $('#container')});
    this.repos.fetch({reset: true});
  },

  show: function(id) {
    this.commits = new Bbprac32.Collections.Commits({id: id});
    new Bbprac32.Views.Description({collection: this.commits, el: $('#container')});
    this.commits.fetch({reset: true});
  }
});
