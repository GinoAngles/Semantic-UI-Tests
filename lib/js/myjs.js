/*Funciones Index.html*/

$( "#btn-menu" ).click(function() {
	$('.ui.sidebar').sidebar('setting', 'transition', 'scale down')
	$('.ui.sidebar').sidebar('toggle');
});


$( "#btn-modal" ).click(function() {
	$('.ui.modal')
       .modal('setting', 'transition', 'horizontal flip')
      //.modal('setting', 'transition', 'scale')
	  .modal('show')
	;
});

$('.rating')
  .rating({
    initialRating: 2,
    maxRating: 10
  })
;