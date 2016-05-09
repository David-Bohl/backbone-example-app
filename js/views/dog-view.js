DogView = Backbone.View.extend({
  el: '#dog', 
  events: {
    'click #set': 'setName'
    //'click #set': 'render'
  },
  setName: function() {
    var name = $('#name').val();
    this.model.set({name: name});
    //console.log(this.model.name);
  },
  render: function(){
    this.$el.html(this.model.get('name'));
  }
});