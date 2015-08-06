NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedsIndex"
  },

  initialize: function (options) {
    this.$root = options.root;
    this.feeds = new NewsReader.Collections.Feeds();
  },

  feedsIndex: function () {
    this.feeds.fetch();
    var view = new NewsReader.Views.FeedsIndex({collection: this.feeds});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$root.html(view.render().$el);
  }
});
