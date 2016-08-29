import Ember from 'ember';

export function cityPopularity(params) {
  var uglyDate = params[0];
  console.log(uglyDate);
  var day = parseInt(uglyDate.slice(8, 10));
  var month = parseInt(uglyDate.slice(5, 7)) - 1;
  console.log("Month: " + month);
  var year = parseInt(uglyDate.slice(0, 4));
  var dateObject = new Date(year, month, day);
  var dayName = dateObject.getDay();
  var daysEnd = function(day) {
    var daysLastNumber = parseInt(day) % 10;
    switch(daysLastNumber) {
      case 1:
          return day + "st";
          break;
      case 2:
          return day + "nd";
          break;
      case 3:
          return day + "rd";
          break;
      default:
          return day + "th";
    }
  }
  var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var prettyDate = dayNames[dayName] + ", " + months[month] + " " + daysEnd(day) + ", " + year;
  return prettyDate;
}

export default Ember.Helper.helper(cityPopularity);
