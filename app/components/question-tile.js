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
