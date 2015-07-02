import Ember from 'ember';

export default Ember.Controller.extend({
  showReturned: false,
  filteredResults: Ember.computed('model.state', 'showReturned', function() {
    if(this.showReturned === true) {
      return this.get('this.model');
    } else {
      const articles = this.get('this.model');
      return articles.filter(function(article) {
        return article.get('state') === 'borrowed';
      })
    }
  }),
  queryParams: ['show'],
  possibleStates: ['borrowed', 'returned'],
  actions: {
    setShowReturned() {
      this.toggleProperty('showReturned');
    }
  }
});
