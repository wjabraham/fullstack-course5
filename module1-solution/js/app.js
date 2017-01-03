(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.CheckLunchItems = function () {
    var lunchItems = 0;
    if ($scope.name) {
      lunchItems = $scope.name.split(',').length;
    }
    SetMessage(lunchItems);
  };

  function SetMessage(countOfLunchItems) {
    if (countOfLunchItems == 0) {
      $scope.message = "Please enter data first.";
    } else {
      $scope.message = countOfLunchItems > 3 ? "Too much!" : "Enjoy!";
    }
  };
}
})();
