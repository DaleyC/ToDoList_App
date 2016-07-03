(function () {
    'use strict'

    angular.module('app').controller('ImportantTasks', Controller);

    function Controller($scope, toDoListService) {
        var vm = this;
        vm.AddItem = AddItem;
        vm.MoveItemsToDone = MoveItemsToDone;
        
        Init();
        
        
        function Init() {
            vm.highToDoList = toDoListService.highToDoList;
        }

        function AddItem() {
            console.log('add');
            var item = {
            };
            item.title = 'Title here';
            item.importance = 'High';
            vm.highToDoList.push(item);
            console.log(vm.highToDoList);
        }

        function MoveItemsToDone() {
            console.log('done');

            for (var i = vm.highToDoList.length - 1; i >= 0; i--) {
                console.log('remove')
                if (vm.highToDoList[i].isDone) {
                    toDoListService.tasksMarkedDone.push(vm.highToDoList[i]);
                    vm.highToDoList.splice(i, 1);
                }
            }
        }

    }

})();