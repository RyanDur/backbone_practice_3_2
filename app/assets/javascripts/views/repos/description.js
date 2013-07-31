Bbprac32.Views.Description = Backbone.View.extend({
  template: JST['repos/description'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.each(this.appendCommit);
    return this;
  },

  appendCommit: function(commit) {
    var view = new Bbprac32.Views.Commit({model: commit});
    $('.commits').append(view.render().el);
  }
});
