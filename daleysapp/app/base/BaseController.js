(function () {
    'use strict'

    angular.module('app').controller('BaseController', Controller);

    function Controller($scope) {
        var vm = this;
        
        console.log('hey');
        vm.hey = 'HAI';
    }

})();