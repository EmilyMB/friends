import Ember from 'ember';

export default Ember.Route.extend({
  deactivate() {
    let model = this.modelFor('friends/edit');
    model.rollback();
  }
});
