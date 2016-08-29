import Ember from 'ember';

export default Ember.Component.extend({
  logIn: Ember.inject.service(),
  loggedInUserMatch: Ember.computed('logIn.loggedInUser', 'answer.user', function() {
    var loggedInUser = this.get('logIn.loggedInUser.id');
    var answersUser = this.get('answer.user.id');
    console.log("Logged in user: " + loggedInUser);
    console.log("answersUser: " + answersUser);
    if (this.get('logIn.loggedInUser.id') === this.get('answer.user.id')) {
      return true;
    } else {
      return false;
    }
  }),
  editing: false,
  actions: {
    edit(){
      this.set('editing', true);
    },
    updateAnswer(answer) {
      var newAnswer = answer;
      newAnswer.save();
      this.set('editing', false);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    }
  }
});
