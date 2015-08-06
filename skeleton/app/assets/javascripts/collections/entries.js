NewsReader.Collections.Entries = Backbone.Collection.extend({
  url: this.generateUrl,

  initialize: function (options) {
    this.feed = options.feed;
  },

  generateUrl: function () {
    return this.feed.url() + '/entries';
  },
});
