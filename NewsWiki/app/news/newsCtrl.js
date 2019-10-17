(function (){
    "use strict";
    angular.module("newsWikiApp")
        //.controller("NewsCtrl", NewsCtrl);
        // min-safe array, los primeros elementos seran todos lo parametros que recibira el controller 
        .controller("NewsCtrl", ["newsResource", NewsCtrl]);

    // min-safe array
    function NewsCtrl(newsResource){
        var me = this;

        newsResource.query(function(data){
            me.news = data;
        });

    }   // NewsCtrl
        
} ());