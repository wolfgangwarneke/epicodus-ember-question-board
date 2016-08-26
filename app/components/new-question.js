import Ember from 'ember';

export default Ember.Component.extend({
  logIn: Ember.inject.service(),
  actions: {
    askQuestion() {
      var date = new Date();
      var jsonDate = date.toJSON();
      var params = {
        header: this.get('header'),
        content: this.get('content'),
        timestamp: jsonDate,
        user: this.get('logIn.loggedInUser')
      };
      this.sendAction("askQuestion", params);
    }
  }
});
