NewsReader.Views.FeedListItem = Backbone.View.extend({
  template: JST['feed/list_item'],

  tagName: 'li',

  events: {
    "click button.destroy": "destroyFeed"
  },

  render: function () {
    this.$el.html(this.template({feed: this.model}));
    return this;
  },

  destroyFeed: function (e) {
    this.model.destroy();
    this.remove();
  }
});
