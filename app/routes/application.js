import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('hi save from application route');

      return true;
    },
    cancel: function() {
      console.log('hi cancel from application route');

      return true;
    }
  }
});
