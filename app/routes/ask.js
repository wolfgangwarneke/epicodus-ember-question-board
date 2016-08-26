import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    askQuestion(params) {
      alert('router action triggered');
      var newQuestion = this.store.createRecord('question', params);
      var user = params.user;
      user.get('questions').addObject(newQuestion);
      newQuestion.save().then(function() {
        return user.save();
      });
      this.transitionTo('questions');
    }
  }
});
