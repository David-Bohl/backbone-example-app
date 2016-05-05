Dog = Backbone.Model.extent({
  initialize: function(){
    this.view = new DogView({model: this});
    this.on('change: name', function(){
      this.view.render();
    });
  }
});

