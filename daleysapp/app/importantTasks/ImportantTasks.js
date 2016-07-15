(function () {
    'use strict'

    angular.module('app').controller('ImportantTasks', controller);

    function controller($scope, appService) {
        var vm = this;

        vm.addTask = addTask;
        vm.moveItemsToDone = moveItemsToDone;
        vm.datePicker = document.getElementsByTagName("date-picker-input");

        init();

        function init() {
            vm.highToDoList = appService.highToDoList;
        }

        function addTask() {
            var item = {};
            item.title = 'Title here';
            item.description = 'Description of task here';
            item.importance = 'High';

            vm.highToDoList.push(item);
        }

        function moveItemsToDone() {
            for (var i = vm.highToDoList.length - 1; i >= 0; i--) {
                if (vm.highToDoList[i].isDone) {
                    appService.tasksMarkedDone.push(vm.highToDoList[i]);
                    vm.highToDoList.splice(i, 1);
                }
            }

        }

    }
})();