window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.Router($('div#content'));
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
