//  (function () {
    'use strict'

    angular
        .module('app')
        .controller('AdminController', Admin);


    function Admin($scope) {
    var vm = this;

    vm.title = 'Admin';
    vm.isChecked = true;
    vm.ken = 'awesome';
    vm.people = [{name: 'john'},{name: 'jeff'},{name:'ken'}];

        function activate() {
           
        }
    }
})();