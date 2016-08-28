import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('signup');
  this.route('login');
  this.route('users');
  this.route('signout');
  this.route('ask');
  this.route('questions');
  this.route('question', {path: '/question/:question_id'});
});

export default Router;
