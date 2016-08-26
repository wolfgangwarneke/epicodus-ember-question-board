import Ember from 'ember';

export default Ember.Route.extend({
  logIn: Ember.inject.service(),
  actions: {
    userLogin(params) {
      var self = this;
      console.log(params);
      var checkUser = this.store.findRecord('user', "-KQ7RksRyVqBwt0Trauf");
      // var checkUser = this.store.query('user', {
      //   orderBy: 'username',
      //   equalTo: "params.username"
      // });
      console.log(checkUser);
      checkUser.then(function(returnedUser) {
        console.log(returnedUser);
        if (returnedUser.get('password') === params.password) {
          self.get('logIn').login(returnedUser);
          self.transitionTo('index');
          console.log('true that');
        };
        console.log(returnedUser.get('password'));
        console.log(params.password);
      })
    }
  }
});
