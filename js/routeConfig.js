console.log("it'\s working!!")

var app = angular.module("internalAdmin", ['ui.router', 'ngAnimate', 'anim-in-out']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/menu");
    $stateProvider
    .state('menu', {
        url: "/menu",
        templateUrl: "/templates/menu.html"
    })
    .state('diffCheck', {
        abstract: true,
        url: "",
        templateUrl: "/templates/DiffToolUI/diffCheck.html"
    })
    .state('diffCheck.siteSelect', {
        url: "/siteSelect",
        views:{
            "": {
                templateUrl: "/templates/DiffToolUI/siteSelector.html",
                controller: "selectSiteCtrl"
            }
           
        }
    })
    .state('diffCheck.compare', {
        url: "/compare/:siteKey",		
        templateUrl: '/templates/DiffToolUI/compareView.html',
        controller: "comparisonCtrl"
    })
    .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
    });
});
