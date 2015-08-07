NewsReader.Views.FeedForm = Backbone.View.extend({
  template: JST['feed/form'],

  tagName: 'div',
  className: 'form-background',

  events: {
    "click button.create-feed": "saveModel",
    "click button.close": "closeForm"
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  saveModel: function (e) {
    e.preventDefault;
    this.closeForm();
  },

  closeForm: function () {
    this.remove();
    Backbone.history.navigate("", { trigger: true });
  }
});
