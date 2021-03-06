import Ember from 'ember';

export default Ember.Service.extend({
  testTruth: true,
  loggedIn: false,
  loggedInUser: null,
  login(user){
    this.set('loggedIn', true);
    this.set('loggedInUser', user);
    this.set('loggedInUser.active', true);
    this.get('loggedInUser').save();
  },
  signout(){
    this.set('loggedIn', false);
    this.set('loggedInUser.active', false);
    this.get('loggedInUser').save();
    this.set('loggedInUser', null);
  }
});
