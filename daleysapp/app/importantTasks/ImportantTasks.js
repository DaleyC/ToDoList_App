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
                    toDoListService.itemsMarkedDone.push(vm.highToDoList[i]);
                    vm.highToDoList.splice(i, 1);
                }
            }
        }
        vm.today = function ($index) {
            console.log('today function');
            vm.highToDoList[$index].due = new Date()
        }
           
       
        
       
        vm.clear = function ($index) {
            vm.highToDoList[$index].due = null;
        };

        vm.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        vm.dateOptions = {
           
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

       
        

        vm.toggleMin = function () {
            vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
            vm.dateOptions.minDate = vm.inlineOptions.minDate;
        };

        vm.toggleMin();

        vm.open1 = function () {
            vm.popup1.opened = true;
        };

        vm.open2 = function () {
            vm.popup2.opened = true;
        };

        vm.setDate = function (year, month, day) {
            vm.due = new Date(year, month, day);
        };

        vm.formats = ['shortDate'];
        vm.format = vm.formats[0];
        vm.altInputFormats = ['M!/d!/yyyy'];

        vm.popup1 = {
            opened: false
        };

        vm.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        vm.events = [
          {
              date: tomorrow,
              status: 'full'
          },
          {
              date: afterTomorrow,
              status: 'partially'
          }
        ];

        function getDayClass(data) {
            var date = data.date,
              mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < vm.events.length; i++) {
                    var currentDay = new Date(vm.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return vm.events[i].status;
                    }
                }
            }

            return '';
        }

    }

})();