window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.Router({root: $('div#content')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
