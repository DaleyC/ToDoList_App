(function () {
    'use strict'

    angular.module('app').controller('DoneListController', Controller);

    function Controller($scope, ToDoListService) {
        var vm = this;
        vm.hey = 'Done!';

        Init();

        function Init() {
            vm.itemsMarkedDone = ToDoListService.itemsMarkedDone;
            
        }
        



    }

})();