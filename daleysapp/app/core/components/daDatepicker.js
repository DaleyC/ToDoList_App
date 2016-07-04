(function () {
    'use strict';
    angular.module('app').component('daDatepicker', {
        templateUrl: 'app/core/components/daDatepicker.html',
        controller: controller,
        bindings: {
            selectedDate: '='
        },
        restrict: 'E'
    });

    function controller($scope) {
        var vm = this;

        vm.clear = clear;
        vm.dateOptions = {
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };
        vm.format = 'MM/dd/yyyy';
        vm.open = open;
        vm.popup = {
            opened: false
        };
        vm.today = today;

        init();

        function clear() {
            vm.selectedDate = undefined;
        }

        function init() {
        }

        function open() {
            vm.popup.opened = true;
        }

        function today() {
            vm.selectedDate = new Date();
        }

    }
})();
