// import moment here; use this package in each function
const moment = require('moment');

const today = () => {
  // Return the name of current day. Ex. Monday, Tuesday, etc.
  return moment().format('dddd');
}

const calendar = () => {
  // write code for dates.calendar
  // Return the current date in the format: May 29, 2019
  // formatted test to reflect July 5, 2021
  return moment().format('MMM DD, YYYY');
}

const currentTime = () => {
  // write code for dates.currentTime
  // Return the current time in the format: 03:21:51 PM
  return moment().format('HH:MM:SS A');

}

module.exports = {
  today,
  calendar,
  currentTime
}