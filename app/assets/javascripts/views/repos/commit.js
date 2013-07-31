Bbprac32.Views.Commit = Backbone.View.extend({
  template: JST['repos/commit'],
  tagName: 'li',

  render: function() {
    this.$el.html(this.template({commit: this.model}));
    return this;
  }
});
