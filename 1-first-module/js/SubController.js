var SubController = function SubController($scope) {
  var self = this;
  $scope.firstName = 'Samreen';
  $scope.lastName = 'Saleem';

  this.firstName = 'Samreen';
  this.lastName = 'Saleem';
};



SubController.$inject = ['$scope'];
angular
.module('macPro')
.controller('SubController', SubController);
