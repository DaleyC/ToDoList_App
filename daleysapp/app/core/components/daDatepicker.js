(function () {
    'use strict';
    angular.module('app').component('daDatepicker', {
        templateUrl: 'app/core/components/daDatepicker.html',
        controller: Controller,
        bindings: {
            selectedDate: '='
        },
        restrict: 'E'
    });

    function Controller($scope) {
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

        function init() {
        }

        function clear() {
            vm.selectedDate = undefined;
        }

        function open() {
            vm.popup.opened = true;
        }

        function today() {
            vm.selectedDate = new Date();
        }

    }
})();
