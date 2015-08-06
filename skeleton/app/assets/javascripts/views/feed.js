NewsReader.Views.Feed = Backbone.View.extend({
  template: JST['feed/show'],

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
  }
});
