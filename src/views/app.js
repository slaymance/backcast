var AppView = Backbone.View.extend({

  el: '#app',

  // events: {
  //   'click .video-list-entry-title': function() { console.log('hello'); }
  // },

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    // var videoListView = new VideoListView({
    //   collection: this.collection
    // }).render();
    // this.$('.list').html(videoListView.$el.html());

    return this;
  },

  template: templateURL('src/templates/app.html')

});
