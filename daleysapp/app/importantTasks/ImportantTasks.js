(function () {
    'use strict'

    angular.module('app').controller('ImportantTasks', controller);

    function controller($scope, appService) {
        var vm = this;

        vm.addTask = addTask;
        vm.moveItemsToDone = moveItemsToDone;
        vm.isSubmitted = false;

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
            vm.isSubmitted = true;
            if (vm.form.$invalid) {
                return;
            }
            for (var i = vm.highToDoList.length - 1; i >= 0; i--) {
                if (vm.highToDoList[i].isDone) {
                    appService.tasksMarkedDone.push(vm.highToDoList[i]);
                    vm.highToDoList.splice(i, 1);
                }
            }
            vm.isSubmitted = false;
            vm.form.$setPristine();
        }

    }
})();