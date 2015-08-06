NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedsIndex"
  },

  initialize: function ($root) {
    this.$root = $root;
    this.feeds = new NewsReader.Collections.Feeds();
  },

  feedsIndex: function () {
    this.feeds.fetch();
    var view = new NewsReader.Views.FeedsIndex({collection: this.feeds});
    this.$root.html(view.render().$el);
  },

  swapView: function () {

  }
});
