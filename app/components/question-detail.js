import Ember from 'ember';

export default Ember.Component.extend({
  logIn: Ember.inject.service(),
  loggedInUserMatch: Ember.computed('logIn.loggedInUser', 'question.user', function() {
    var loggedInUser = this.get('logIn.loggedInUser.id');
    var questionsUser = this.get('question.user.id');
    console.log("Logged in user: " + loggedInUser);
    console.log("questionsUser: " + questionsUser);
    if (this.get('logIn.loggedInUser.id') === this.get('question.user.id')) {
      return true;
    } else {
      return false;
    }
  }),
});
