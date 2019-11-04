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
            .state("newsEdit", {
                abstract: true,
                url: "/noticias/edit/:idNoticia",
                templateUrl: "app/news/newsEditView.html",
                controller: "NewsEditCtrl as vm",
                resolve:{
                    newsResource: "newsResource",
                    newsItem: function(newsResource, $stateParams){
                        var idNoticia = $stateParams.idNoticia;
                        return newsResource.get({idNoticia: idNoticia}).$promise;

                    }
                }
            })
            .state("newsEdit.info", {
                url: "/info",
                templateUrl: "app/news/newsEditInfoView.html"
            })
            .state("newsEdit.tags", {
                url: "/tags",
                templateUrl: "app/news/newsEditTagsView.html"
            })
            .state("newsDetail", {
                url: "/noticias/:idNoticia",
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
