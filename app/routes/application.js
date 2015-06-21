import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      return true;
    },

    cancel: function() {
      return true;
    }
  }
});
