import Ember from 'ember';

export default Ember.Component.extend({
  logIn: Ember.inject.service(),
  actions: {
    askQuestion() {
      alert(this.get('logIn.loggedIn'));
      var date = new Date();
      var jsonDate = date.toJSON();
      var params = {
        header: this.get('header'),
        main: this.get('main'),
        timestamp: jsonDate,
        user: this.get('logIn.loggedInUser')
      };
      this.sendAction("askQuestion", params);
    }
  }
});
