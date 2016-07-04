(function () {
    'use strict'

    angular.module('app').controller('DoneList', controller);

    function controller($scope, appService) {
        var vm = this;

        init();

        function init() {
            vm.tasksMarkedDone = appService.tasksMarkedDone;
        }

    }
})();