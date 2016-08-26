import Ember from 'ember';

export default Ember.Component.extend({
  contentPreview: Ember.computed('question.content', function() {
    var contentToShorten = this.get('question.content');
    if (contentToShorten.length > 50) {
      contentToShorten = contentToShorten.slice(0, 49);
      contentToShorten += "...";
    }
    return contentToShorten
  }),
  actions: {
    testLog(username) {
      console.log(username);
    }
  }
});
