(function () {
    'use strict'

    angular.module('app').controller('ToDoList', Controller);

    function Controller($scope) {
        var vm = this;

        vm.hey = 'To Do';
    }

})();