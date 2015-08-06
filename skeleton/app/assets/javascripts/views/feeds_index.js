NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feed/index'],

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function(feed){
      var feedItem = new NewsReader.Views.FeedListItem({model: feed});
      $('ul.feeds').append(feedItem.render().$el);
    });
    return this;
  },
});
