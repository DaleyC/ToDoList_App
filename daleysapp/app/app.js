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
           url: "toDoList",
           templateUrl: "app/toDoList/toDoList.html"
       })
        .state('base.doneList', {
            url: "doneList",
            templateUrl: "app/doneList/doneList.html"
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