NewsReader.Views.Entry = Backbone.View.extend({
  template: JST['feed/entries/index'],
  tagName: 'li',

  render: function () {
    this.$el.html(this.template({ entry: this.model }));
    return this;
  },
});
