(function () {
    angular.module('app').factory('appService', Service);

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