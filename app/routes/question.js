import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('questions');
    },
    updateQuestion(question) {
      question.save();
      this.transitionTo('question', question.id);
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question', this.get('currentModel.id'));
    }
  }
});
