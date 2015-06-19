import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log('+ hi save in new controller');
      return true;
    },
    cancel: function() {
      console.log('+ hi cancel in new controller');
      return true;
    }
  }
});
