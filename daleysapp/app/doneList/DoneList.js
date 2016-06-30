(function () {
    'use strict'

    angular.module('app').controller('DoneList', Controller);

    function Controller($scope, toDoListService) {
        var vm = this;
       

        Init();

        function Init() {
            vm.tasksMarkedDone = toDoListService.tasksMarkedDone;
            
        }
        



    }

})();