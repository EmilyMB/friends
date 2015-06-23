import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },

  deactivate() {
    let model = this.modelFor('articles/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },

  actions: {
    save() {
      let model = this.modelFor('articles/new');
      model.save().then(() => {
        this.transitionTo('articles');
      });
    },

    cancel() {
      this.transitionTo('articles');
    }
  }
});
