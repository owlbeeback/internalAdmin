console.log("it'\s working!!")

var app = angular.module("internalAdmin", ['ui.router', 'ngAnimate', 'anim-in-out']);
app.config(function($stateProvider, $urlRouterProvider, $compileProvider){
    $urlRouterProvider.otherwise("/menu");
    $stateProvider
    .state('menu', {
        url: "/menu",
        templateUrl: "/templates/menu.html"
    })
    .state('validation', {
        abstract: true,
        url: "/validation",
        templateUrl: "/templates/ValToolUI/validation.html"
    })
    .state('validation.hl7', {//in menu, temporarily default to this view, but later to
        //submenu to select cms or hl7
        url: "/hl7",
        templateUrl: "/templates/ValToolUI/hl7Val.html",
        controller: "HL7Ctrl"
    })
    .state('validation.cms', {
        url: "/cms",
        templateUrl: "/templates/ValToolUI/cmsVal.html"
    })
    .state('diffCheck', {
        abstract: true,
        url: "",
        templateUrl: "/templates/DiffToolUI/diffCheck.html"
    })
    .state('diffCheck.siteSelect', {
        url: "/siteSelect",
        // views:{
        //     "": {
        templateUrl: "/templates/DiffToolUI/siteSelector.html",
        controller: "selectSiteCtrl"
            // }
        // }
    })
    .state('diffCheck.compare', {
        url: "/compare/:siteKey",		
        templateUrl: '/templates/DiffToolUI/compareView.html',
        controller: "comparisonCtrl"
    })
});
