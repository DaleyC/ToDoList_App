(function () {
    'use strict'
    
    angular.module('app').controller('LessImportantTasks', Controller);

    function Controller($scope, toDoListService) {
        var vm = this;
        vm.AddItem = AddItem;
        vm.MoveItemsToDone = MoveItemsToDone;
        Init();

        function Init() {
            vm.lowToDoList = toDoListService.lowToDoList;           
        }

        function AddItem() {
            var item = {
            };
            item.title = 'Title here';
            vm.lowToDoList.push(item);
            item.importance = 'Low';
        }

        function MoveItemsToDone() {
            console.log('anything');
            
            for (var i = vm.lowToDoList.length - 1; i >= 0; i--) {
                if (vm.lowToDoList[i].isDone) {
                
                    toDoListService.tasksMarkedDone.push(vm.lowToDoList[i]);
                    vm.lowToDoList.splice(i, 1);
                }
            }
        }
    }
})();

