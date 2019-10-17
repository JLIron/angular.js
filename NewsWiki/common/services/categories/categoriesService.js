(function(){
    // factory, definir un servicio, $http, $resource y $httpBackend
    "use strict";
    angular.module("common.services")
        .factory("categoriesService", categoriesService);

    function categoriesService($http){
        
        // Esto retorna una promesa
        return $http.get("api/categorias");
    }

}());