// IIFE  Immediatly Invoked Function Expression


(function (){

    "use strict";   // ECMAScript
    var app = angular.module("newsWikiApp", 
                                    ["common.services", 
                                    "common.servicesMock",
                                    "ui.router"]);

    app.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html"
            })
            .state("newsList", {
                url: "/noticias",
                templateUrl: "app/news/newsListView.html",
                controller: "NewsCtrl as vm"
            })
            .state("newsDetail", {
                url: "/noticias/:idnoticia",
                params: { 
                    // here we define default value for foo
                    // we also set squash to false, to force injecting
                    // even the default value into url
                    foo: {
                      value: 'defaultValue',
                      squash: false,
                    },
                    idnoticia: {
                        value: '2',
    
                      },
                    // this parameter is now array
                    // we can pass more items, and expect them as []
                    bar : { 
                      array : true,
                    },
                    // this param is not part of url
                    // it could be passed with $state.go or ui-sref 
                    hiddenParam: 'YES',
                  },
                templateUrl: "app/news/newsDetailView.html",
                controller: "NewsDetailCtrl as vm",
                resolve:{
                    newsResource: "newsResource",
                    newsItem: function(newsResource, $stateParams){
                        var idNoticia = $stateParams.idNoticia;
                        return newsResource.get({idNoticia: idNoticia}).$promise;

                    }
                }
            })
    })                                

} () );
