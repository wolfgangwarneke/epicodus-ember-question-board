import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createUser() {
      var date = new Date();
      var jsonDate = date.toJSON();
      var params = {
        username: this.get('username'),
        password: this.get('password'),
        email: this.get('email'),
        first_name: this.get('first-name'),
        last_name: this.get('last-name'),
        bio: this.get('bio'),
        member_since: jsonDate,
        active: false,
      };
      this.sendAction('createUser', params);
    }
  }
});
