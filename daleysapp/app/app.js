/// <reference path="app.js" />
(function () {
    //Registers the 'app' module
    angular.module('app', ['ui.router','ngAnimate', 'ui.bootstrap']);

    angular.module('app').config(Config);
    function Config($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/");


        $stateProvider
      .state('base', {
          url: "/",
          templateUrl: "app/base/base.html"
      })
       .state('base.toDoList', {
           url: "to-do-list",
           templateUrl: "app/toDoList/toDoList.html"
       })
        .state('base.doneList', {
            url: "done-list",
            templateUrl: "app/doneList/doneList.html"
        })
        .state('base.importantTasks', {
            url: "important-tasks",
            templateUrl: "app/importantTasks/importantTasks.html"
        })
        .state('base.lessImportantTasks', {
            url: "less-important-tasks",
            templateUrl: "app/lessImportantTasks/lessImportantTasks.html"
        })
    }

})();