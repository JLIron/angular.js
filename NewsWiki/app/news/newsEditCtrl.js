(function (){
    "use strict";

    angular.module("newsWikiApp")
        .controller("NewsEditCtrl", NewsEditCtrl)
        
    function NewsEditCtrl(newsItem){
        var me = this;
        me.newsItem = newsItem;

        if (me.newsItem.idNoticia == 0){
            me.titulo = "Nueva Noticia";
        }else{
            me.titulo = me.newsItem.tituloNoticia;
        }
    }
        

} ())