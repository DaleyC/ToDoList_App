(function () {
    'use strict'
    
    angular.module('app').controller('LowController', Controller);

    function Controller($scope, ToDoListService) {
        var vm = this;

        vm.hey = "Non Urgent Tasks";
        vm.AddItem = AddItem;
        vm.MoveItemsToDone = MoveItemsToDone;
        Init();

        function Init() {
            vm.lowToDoList = ToDoListService.lowToDoList;
            GetForm();
            GetDropDowns();
        }


        function GetForm() {
            //getPatientData;
        }
        function GetDropDowns() {

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
                
                    ToDoListService.itemsMarkedDone.push(vm.lowToDoList[i]);
                    vm.lowToDoList.splice(i, 1);
                }
            }
        }

        vm.today = function ($index) {
            console.log('today function');
            vm.lowToDoList[$index].due = new Date()
        }




        vm.clear = function ($index) {
            vm.lowToDoList[$index].due = null;
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

        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
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

