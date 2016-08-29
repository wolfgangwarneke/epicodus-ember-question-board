import Ember from 'ember';

export default Ember.Component.extend({
  logIn: Ember.inject.service(),
  actions: {
    answerQuestion(){
      var date = new Date();
      var jsonDate = date.toJSON();
      var params = {
        answer: this.get('answer'),
        timestamp: jsonDate,
        user: this.get('logIn.loggedInUser'),
        question: this.get('question')
      };
      this.sendAction('answerQuestion', params);
    }
  }
});
