(function () {
    'use strict'

    angular.module('app').controller('DoneListController', Controller);

    function Controller($scope, toDoListService) {
        var vm = this;
        vm.hey = 'Done!';

        Init();

        function Init() {
            vm.itemsMarkedDone = toDoListService.itemsMarkedDone;
            
        }
        



    }

})();