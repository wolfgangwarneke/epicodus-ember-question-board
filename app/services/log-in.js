import Ember from 'ember';

export default Ember.Service.extend({
  loggedIn: false,
  loggedInUser: null,
  login(user){
    this.set('loggedIn', true);
    this.set('loggedInUser', user);
  }
});
