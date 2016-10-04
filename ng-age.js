/*
 ng-age
 Copyright 2016 David Thompson
 1.0.0
 */

(function() {
  'use strict';

  angular.module('ng-age', [])
    .filter('age', ageFilter);


  function ageFilter() {
    return function(birthDate) {
      // Firstly get the date right now
      var now = new Date();

      // Split the input by the slash to return a list with format [day, month, year]
      var bdayList = birthDate.split('/');
      // Separate day, month and year variables
      var day = bdayList[0];
      var month = bdayList[1] - 1; // JavaScript Date's months are in a list so the number we pass must be an index. (e.g. January would be the 0th month)
      var year = bdayList[2];

      // Allow year in the format of two digits for birthdays between 2000 - 2009, e.g. 02 instead of 2002
      if(year.toString()[0] === '0' && year.toString().length === 2) {
        year = '20' + year.toString();
      }

      // Create birthday as a new Date object and get difference in milliseconds between birthday and now
      var birthday = new Date(year, month, day);
      var difference = Date.now() - birthday;

      // Create a new Date object in milliseconds from Jan 1st 1970 with same amount of milliseconds as the difference between birthday and now
      var ageDate = new Date(difference);

      if(ageDate.getUTCFullYear() - 1970 < 0) {
        // TODO
        // Error, birthday stated is in the future
      }

      // Return age in years :)
      return ageDate.getUTCFullYear() - 1970;
    }
  }

})();
