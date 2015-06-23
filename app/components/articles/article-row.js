import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, // passed-in
  articleStates: null, // passed-in
  autoSave() {
    let article = this.get('article');
    if (!article.get('isNew')) {
      this.sendAction('save', article);
    }
  },
  saveChanged: Ember.on('init', Ember.observer('article.state', function() {
    let article = this.get('article');
    if (article.get('isDirty') && !article.get('isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }))
});
