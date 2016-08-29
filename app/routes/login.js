import Ember from 'ember';

export default Ember.Route.extend({
  logIn: Ember.inject.service(),
  actions: {
    userLogin(params) {
      var self = this;
      var checkUser = this.store.query('user', { orderBy: 'username', equalTo: params.username });
      checkUser.then(function(returnedUserArray) {
        if (returnedUserArray.get('length') !== 0) {
          var returnedUser = returnedUserArray.get('firstObject');
          if (returnedUser.get('password') === params.password) {
            self.get('logIn').login(returnedUser);
            self.transitionTo('index');
          } else {
            alert('Incorrect password or login failed.')
            self.transitionTo('login');
          };
        } else {
          alert('User not found.');
          self.transitionTo('signup');
        }
      })
    }
  }
});
