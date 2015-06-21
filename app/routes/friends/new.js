import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },

  actions: {
    save() {
      return true;
    },

    cancel() {
      return true;
    }
  }
});
