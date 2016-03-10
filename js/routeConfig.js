console.log("it'\s working!!")

var app = angular.module("internalAdmin", ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/menu");
    $stateProvider
    .state('menu', {
        url: "/menu",
        templateUrl: "/templates/menu.html"
    })
    .state('diffCheck', {
        url: "/diffCheck",
        templateUrl: "/templates/DiffToolUI/diffCheck.html",
        // controller: "selectSiteCtrl"
    })
    .state('compare', {
        url: "/compare/:siteKey",		
        templateUrl: 'compareView.html',
        controller: "comparisonCtrl"
    })
    .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
    });
});
