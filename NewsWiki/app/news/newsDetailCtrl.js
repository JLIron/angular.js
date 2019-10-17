(function(){
    "use strict";
    angular.module("newsWikiApp")
        .controller("NewsDetailCtrl", NewsDetailCtrl)

    function NewsDetailCtrl(newsItem){
        var me = this;
        /*
        me.newsItem = {
                        "idNoticia": 1,
                        "codigoNoticia": "NWD-9838",
                        "tituloNoticia": "Peru envio nota diplomatica a Chile",
                        "descripcionNoticia": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor,eos laborum quaerat quam quos rerum!" +
                        "Expedita itaque optio praesentium quo sequi soluta voluptatem! At eos est fuga illum iusto necessitatibus " +
                        "bcaecati quia tempora ullam. Commodi doloribus error ex fugiat laborum magni, officiis ratione reiciendis sunt" +
                        "velit voluptas voluptates. Culpa deleniti dolore, excepturi fugit id in sed vitae voluptates. Tenetur.",
                        "fechaPublicacion": new Date(),
                        "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/4/1234815/base_image.jpg",
                        "destacado": true,
                        "categoria": "Politica",
                        "tags": ["peru", "politica", "guerra"]
                    };
                    */

        me.newsItem = newsItem;   
           
        // Si no es undefined
        if(me.newsItem.tags){
            me.newsItem.tagsList = me.newsItem.tags.toString();
        }
    }

}());