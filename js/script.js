$(document).ready(function(){

	var height = $(window).height();

	ajustesIniciales();


	function ajustesIniciales(){
		$("#body").css({"margin-top": height - 80 + "px"});
	}

	$(document).scroll(function(){
		var scrollTop = $ (this).scrollTop();  //calcula los px que se van yendo para arriba
		var pixeles = scrollTop / 70;

		if (scrollTop < height)  {
			$("#mainCont").css({
				"-webkit-filter":"blur(" + pixeles + "px)",
				"background-position":"center -" + pixeles * 10 +"px"
			});
		}

	});

	$( "#titleCaja1" ).mouseover(function() {
		$("#title1").fadeIn();
	});

	$("#titleCaja1").click(function(){
		$("#exampleModal").modal();
	});

	$( "#titleCaja1" ).mouseout(function() {
		if ($( "#title1" ).is(':hover')=== false){

			$("#title1").fadeOut();

		}
});




});

