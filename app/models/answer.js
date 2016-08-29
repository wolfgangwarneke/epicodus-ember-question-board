import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  timestamp: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  user: DS.belongsTo('user', {async: true})
});
