var VideoListView = Backbone.View.extend({

  // el: '.video-list',

  // events: {
  //   'click .video-list-entry-title': 'handleClick'
  // },

  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.empty();
    this.collection.forEach(function(video) {
      var videoListEntry = new VideoListEntryView({model: video});
      this.$el.append(videoListEntry.render().el);
      
    }, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
