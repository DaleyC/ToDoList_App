(function () {
    'use strict'

    angular.module('app').controller('DoneList', Controller);

    function Controller($scope, appService) {
        var vm = this;
       

        Init();

        function Init() {
            vm.tasksMarkedDone = appService.tasksMarkedDone;
            
        }
        



    }

})();