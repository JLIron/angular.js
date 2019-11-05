(function (){
    "use strict";

    angular.module("newsWikiApp")
        .controller("NewsEditCtrl", NewsEditCtrl)
        
    function NewsEditCtrl(newsItem, $state){
        var me = this;
        me.newsItem = newsItem;

        if (me.newsItem.idNoticia == undefined){
            me.titulo = "Nueva Noticia";
        }else{
            me.titulo = "Editar: " + me.newsItem.tituloNoticia;
        }

        if(!me.newsItem.destacado){
            me.newsItem.destacado = false;
        }

        me.showDatepicker = function ($event){
            $event.preventDefault();
            $event.stopPropagation();

            me.opened = !me.opened;
        }

        me.guardar = function (){
            me.newsItem.$save(function (data){
                toastr.success('La noticia se ha guardado!', 'Miracle Max Says')
            });
        }

        me.cancelar = function (){
            $state.go("newsList");
        }
    }
        

} ())