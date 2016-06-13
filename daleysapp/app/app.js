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
       .state('base.todo-list', {
           url: "todo-list",
           templateUrl: "app/todo-list/todo-list.html"
       })
        .state('base.done-list', {
            url: "done-list",
            templateUrl: "app/done-list/done-list.html"
        })
        .state('base.high', {
            url: "high",
            templateUrl: "app/high-priority/high.html"
        })
        .state('base.low', {
            url: "low",
            templateUrl: "app/low-priority/low.html"
        })
        ///.state('base.admin', {
          ///  url: "admin",
         ///   templateUrl: "app/admin/admin.html"
      ///  })

    }

})();