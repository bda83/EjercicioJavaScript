 $( document ).ready(function() {

// Hover del menú despliega submenú
  $("ul.clearfix > li").hover(function () {
    if($(window).width() >= 990) {
      $(this).children("ul").fadeToggle(100);
    }
  },function(){
    $(this).children("ul").fadeToggle(100);
  });

// Al clicar sobre un li del menú le pone clase de seleccionado y se lo borra a los demás
  $("ul.clearfix > li > a").click(function (evento) {
    evento.preventDefault();
    $('.current-menu-item').removeClass('current-menu-item');
    $(this).parent().addClass('current-menu-item');
  });


// Al hacer click sobre botón hamburguesa se despliega el menú, desaparece dicho botón y aparece el aspa de cerrar
  $("#mobile-button").click(function () {
    $("#menu-container").slideDown(50);
    $("#mobile-button").hide();
    $("#mobile-close").show();
  });

// Al hacer click sobre el botón de cerrar menú se recoge el menú, desaparece el aspa y aparece el botón hamburguesa
  $("#mobile-close").click(function () {
    $("#menu-container").slideUp(50);
    $("#mobile-close").hide();
    $("#mobile-button").show();
  });

/* Asegurar que el menú móvil no esté abierto al ser la pantalla mayor o igual de 990px
https://api.jquery.com/resize/
*/
  $(window).resize(function() {
    if($(window).width() >= 990) {
      $("#menu-container").slideUp(50);
      /*Hide y Show cambia el atributo display (block|none). 'removeAttr' borra estos atributos atributos
      https://api.jquery.com/removeAttr/
      */
      $("#mobile-close").removeAttr("style");
      $("#mobile-button").removeAttr("style");
    }
  });

});


