// this is called a getter

var MainController = function MainController($scope, $rootScope) {
    $scope.firstName = 'Amit';
    $scope.lastName = 'Agwan'; // properties

    var self = this;
    this.name = 'Dixit';

    self.firstName = 'Amit';
    self.lastName = 'Sharma';
    // method in the object
    $scope.addNewName = function addNewName() {

    };


    //console.log($scope);
    //console.log($rootScope);
};

MainController.$inject = ['$scope', '$rootScope'];
// getter here to assign controller here
angular
    .module('macPro')
    .controller('MainController', MainController);






// var MainController = function MainController($scope, $rootScope) {
//   var self = this;
//   // || we can use this directly
//
//   $scope.name = 'Amit';
//
//   self.name = 'Amit';
//
//   self.likes = ['Pizza', 'Coke'];
// };
//
// MainController.$inject = ['$scope', '$rootScope'];
//
// angular
//   .module('app')
//   .controller('MainController', MainController);
