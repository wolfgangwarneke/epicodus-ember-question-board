import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  email: DS.attr(),
  first_name: DS.attr(),
  last_name: DS.attr(),
  full_name: Ember.computed('first_name', 'last_name', function() {
    var firstName = this.get('first_name');
    var lastName = this.get('last_name');
    return firstName + " " + lastName;
  }),
  bio: DS.attr(),
  member_since: DS.attr(),
  active: DS.attr(),
  questions: DS.hasMany('question', {async: true}),
  answers: DS.hasMany('answer', {async: true})
});
