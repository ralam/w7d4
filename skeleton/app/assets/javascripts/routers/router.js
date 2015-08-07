NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feed/new": "addFeed",
    "feed/:id": "feedShow"
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

  feedShow: function (id) {
    var feed = this.feeds.getOrFetch(id);
    var view = new NewsReader.Views.Feed({
      model: feed
    });
    this._swapView(view);
  },

  addFeed: function () {
    var view = new NewsReader.Views.FeedForm({collection: this.feeds});
    $('body').prepend(view.render().$el);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$root.html(view.render().$el);
  }
});
