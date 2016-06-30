(function () {
    angular.module('app').factory('toDoListService', Service);

    function Service() {
        var service = {
            lowToDoList: [],
            highToDoList: [],
            lowItemsMarkedDone: [],
            highItemsMarkedDone: [],
            tasksMarkedDone: []
        };
        return service;
    }

})();