import Ember from 'ember';

export default Ember.Route.extend({
  logIn: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    answerQuestion(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var user = params.user;
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      user.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save().then(function() {
          return user.save();
        });
      });
      this.transitionTo('question', params.question.id);
    },
  }
});
