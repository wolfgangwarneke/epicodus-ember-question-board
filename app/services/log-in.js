import Ember from 'ember';

export default Ember.Service.extend({
  loggedIn: false,
  loggedInUser: null,
  login(user){
    this.set('loggedIn', true);
    this.set('loggedInUser', user);
    this.set('loggedInUser.active', true);
    this.get('loggedInUser').save();
    console.log('pheww');
  }
});
