NewsReader.Views.FeedForm = Backbone.View.extend({
  template: JST['feed/form'],

  tagName: 'div',
  className: 'form-background',

  events: {
    "submit .form": "saveModel",
    "click button.close": "closeForm"
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  saveModel: function (e) {
    e.preventDefault();
    var formData = $(e.currentTarget).serializeJSON();
    var model = new NewsReader.Models.Feed();
    debugger;
    model.save(formData.feed, {
      success: function (model) {
        this.collection.add(model);
      }.bind(this)
    });
    this.closeForm();
  },

  closeForm: function () {
    this.remove();
    Backbone.history.navigate("", { trigger: true });
  }
});
