import Ember from 'ember';

export default Ember.Component.extend({
  showQuestions: false,
  showAnswers: false,
  actions: {
    toggleQuestions() {
      if (this.get('showQuestions')) {
        this.set('showQuestions', false);
      } else {
        this.set('showQuestions', true);
        this.set('showAnswers', false);
      }
    },
    toggleAnswers() {
      if (this.get('showAnswers')) {
        this.set('showAnswers', false);
      } else {
        this.set('showAnswers', true);
        this.set('showQuestions', false);
      }
    }
  }
});
