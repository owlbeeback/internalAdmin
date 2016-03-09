console.log("it'\s working!!")

var app = angular.module("internalAdmin", ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/menu");
    $stateProvider
    .state('menu', {
      url: "/menu",
      templateUrl: "menu.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    });
});
