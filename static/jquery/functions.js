/*
|-------------------------------------------------------------
| Función que permite rotar un ícono fa cuando se le da click.
|-------------------------------------------------------------
*/
$(document).ready(function() {
  $(".fa-rotate").click(function(){
    $(this).find($(".fa")).toggleClass('fa-rotate-90');
  });
});