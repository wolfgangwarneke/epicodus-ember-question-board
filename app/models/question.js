import DS from 'ember-data';

export default DS.Model.extend({
  heading: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  user: DS.belongsTo('user', {async: true})
});
