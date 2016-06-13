﻿(function () {
    angular.module('app').factory('ToDoListService', Service);

    function Service() {
        var service = {
            lowToDoList: [],
            highToDoList: [],
            lowItemsMarkedDone: [],
            highItemsMarkedDone: [],
            itemsMarkedDone: []
        };
        return service;
    }

})();