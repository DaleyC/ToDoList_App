(function () {
    'use strict'

    angular.module('app').controller('ToDoListController', Controller);

    function Controller($scope) {
        var vm = this;

        vm.hey = 'To Do';
    }

})();