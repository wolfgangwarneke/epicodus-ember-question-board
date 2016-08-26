import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  email: DS.attr(),
  first_name: DS.attr(),
  last_name: DS.attr(),
  bio: DS.attr(),
  member_since: DS.attr(),
  active: DS.attr(),
  questions: DS.hasMany('question', {async: true}),
  answers: DS.hasMany('answer', {async: true})
});
