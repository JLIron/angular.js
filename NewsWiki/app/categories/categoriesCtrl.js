(function(){
    "use strict";
    angular.module("newsWikiApp")
        .controller("CategoriesCtrl", ["categoriesService", CategoriesCtrl])   // Pascal Case

        // Puedo acceder al controlador del servicio por haber inyectado la dependencia en app a newsWikiApp
        function CategoriesCtrl (categoriesService){
            var me = this;

            /*
            categoriesService.then(function(response){
                me.categories = response.data;
            });
            */
            
            categoriesRepository.getCategories(
                {
                    categoriesService: categoriesService,
                    success: function (data) {
                        me.categories = data;
                    }
                }
            );

            me.showCategories = false;

            
            me.toggleCategories = function (){
                me.showCategories = !me.showCategories;
            };
        }

        // Patron Revealing Module
        // categoriesRepository su cuerpo esta incluido dentro de un IIFE
        var categoriesRepository = (function(){

            var me = {};
            me.getCategories = function(options){
                options.categoriesService.then(function(response){
                    options.success(response.data);
                });


            };

            return {
                // Puede ser consumido desde cualquier lugar fuera de categoriesRepository
                getCategories : me.getCategories
            }

        } ());

} ());