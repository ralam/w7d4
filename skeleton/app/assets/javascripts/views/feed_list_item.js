NewsReader.Views.FeedListItem = Backbone.View.extend({
  template: JST['feed/list_item'],

  tagName: 'li',

  render: function () {
    this.$el.html(this.template({feed: this.model}));
    return this;
  }
});
