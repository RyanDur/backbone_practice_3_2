Bbprac32.Views.Repo = Backbone.View.extend({
  template: JST['repos/repo'],
  tagName: 'li',

  events: {
    'click': 'description'
  },

  render: function() {
    this.$el.html(this.template({repo: this.model}));
    return this;
  },

  description: function() {
    Backbone.history.navigate("/repos/" + this.model.get('id'), true);
  }
});
