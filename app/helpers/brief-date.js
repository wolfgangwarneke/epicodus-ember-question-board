import Ember from 'ember';

export function briefDate(params) {
  var jsonDate = params[0];
  var month = jsonDate.slice(5, 7);
  if (month.charAt(0) === "0") {
    month = month.charAt(1);
  }
  var day = jsonDate.slice(8, 10);
  if (day.charAt(0) === "0") {
    day = day.charAt(1);
  }
  var year = jsonDate.slice(0, 4);
  return month + "-" + day + "-" + year;
}

export default Ember.Helper.helper(briefDate);
