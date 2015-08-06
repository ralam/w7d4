NewsReader.Collections.Entries = Backbone.Collection.extend({
  url: this.generateUrl,

  initialize: function (options) {
    this.feed = options.feed;
  },

  generateUrl: function () {
    return this.feed.url() + '/entries';
  },

  getOrFetch: function (id) {
    var model = this.get(id);
    if(!model) {
      model = new NewsReader.Models.Entry();
      this.add(model);
    }
    model.fetch();
    return model;
  },
});
