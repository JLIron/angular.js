// IIFE  Immediatly Invoked Function Expression


(function (){

    "use strict";   // ECMAScript
    var app = angular.module("newsWikiApp", 
                                    ["common.services", 
                                    "common.servicesMock",
                                    "ui.router",
                                    "ui.mask",
                                    "ui.bootstrap",
                                    "ngMessages"]);

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

    app.config(function ($provide) {
        $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
            return function(exception, cause){
                exception.message = "Por favor, conectese con Help Desk! " +
                "\n Message: " + exception.message;
            $delegate(exception, cause);
            //alert(exception.message);
            toastr.error(exception.message);
            }
        }])

    })

} () );
