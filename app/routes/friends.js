import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      return true;
    },

    cancel() {
      return true;
    },

    delete(friend) {
      friend.destroyRecord().then(() => {
        this.transitionTo('friends.index');
      });
    }
  }
});
