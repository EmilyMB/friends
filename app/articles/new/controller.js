import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.description', function() {
      return !Ember.isEmpty(this.get('model.description'));
    }
  ),

  actions: {
    save() {
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'Please add a description');
        return false;
      }
    }
  }
});
