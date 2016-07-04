(function () {
    angular.module('app').factory('appService', service);

    function service() {
        var service = {
            highItemsMarkedDone: [],
            highToDoList: [],
            lowItemsMarkedDone: [],
            lowToDoList: [],
            tasksMarkedDone: []
        };

        return service;
    }
})();