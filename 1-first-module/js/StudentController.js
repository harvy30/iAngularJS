var StudentController = function StudentController($scope) {
    var self = this;

    self.students = [{
        firstName: 'Afzal',
        lastName: 'Agwan'
    }, {
        firstName: 'Amit',
        lastName: 'Sharma'
    }, {
        firstName: 'Samreen',
        lastName: 'Saleem'
    }, {
        firstName: 'Simran',
        lastName: 'Singh'
    }, {
        firstName: 'Haseeb',
        lastName: 'Bhatti'
    }, {
        firstName: 'Ashok',
        lastName: 'Sirpaal'
    }, {
        firstName: 'Kajal',
        lastName: 'Mantri'
    }];

    console.log(self.students);

};

StudentController.$inject = ['$scope'];

angular
    .module('macPro')
    .controller('StudentController', StudentController);
