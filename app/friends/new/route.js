import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },

  deactivate() {
    let model = this.modelFor('friends/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
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
