import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    userLogin() {
      var params = {
        username: this.get('username'),
        password: this.get('password')
      };
      this.sendAction('userLogin', params);
    }
  }
})
