import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },

  actions: {
    save: function() {
      console.log('hi from save in friends/new route');

      return true;
    },
    cancel: function() {
      console.log('hi from cancel in friends/new route');

      return true;
    }
  }
});
