NewsReader.Views.Feed = Backbone.View.extend({
  template: JST['feed/show'],

  events: {
    "click button.refresh": "refreshPage"
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({ feed: this.model }));
    this.model.entries().each(function (entry) {
      var listItem = new NewsReader.Views.Entry({model: entry});
      $('ul.entries').append(listItem.render().$el);
    }.bind(this));
    return this;
  },

  refreshPage: function () {
    this.model.fetch();
  },
});
