Bbprac32.Views.ReposIndex = Backbone.View.extend({
  template: JST['repos/index'],

  events: {
    'click .repo': 'getRepo'
  },

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.each(this.appendRepo,this);
    return this;
  },

  appendRepo: function(repo) {
    var view = new Bbprac32.Views.Repo({model: repo});
    this.$('.repos').append(view.render().el)
  },

  getRepo: function(event) {
    this.collection.getRepo();
  }
});
