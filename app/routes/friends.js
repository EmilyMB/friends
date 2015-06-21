import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      return true;
    },

    cancel: function() {
      return true;
    },

    delete: function(friend) {
      friend.destroyRecord().then(() => {
        this.transitionTo('friends.index');
      });
    }
  }
});
