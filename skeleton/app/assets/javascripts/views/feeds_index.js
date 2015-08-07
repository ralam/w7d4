NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feed/index'],

  events: {
    "click button.feed-form": "popUpForm",
  },

  initialize: function (){
    this.listenTo(this.collection, "sync add", this.render);
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function(feed){
      var feedItem = new NewsReader.Views.FeedListItem({ model: feed });
      $('ul.feeds').append(feedItem.render().$el);
    });
    return this;
  },

  popUpForm: function () {
    Backbone.history.navigate("feed/new", { trigger: true });
  }
});
