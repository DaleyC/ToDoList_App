(function () {
    'use strict'

    angular.module('app').controller('LessImportantTasks', controller);

    function controller($scope, appService) {
        var vm = this;

        vm.addTask = addTask;
        vm.moveItemsToDone = moveItemsToDone;

        init();

        function init() {
            vm.lowToDoList = appService.lowToDoList;
        }

        function addTask() {
            var item = {};
            item.title = 'Title here';
            item.description = 'Description of task here';
            item.importance = 'Low';

            vm.lowToDoList.push(item);
        }

        function moveItemsToDone() {
            for (var i = vm.lowToDoList.length - 1; i >= 0; i--) {
                if (vm.lowToDoList[i].isDone) {
                    appService.tasksMarkedDone.push(vm.lowToDoList[i]);
                    vm.lowToDoList.splice(i, 1);
                }
            }
        }

    }
})();

