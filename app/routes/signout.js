import Ember from 'ember';

export default Ember.Route.extend({
  logIn: Ember.inject.service(),
  actions: {
    userSignout() {
      this.get('logIn').signout();
      this.transitionTo('index');
    }
  }
});
