$(document).ready(function(){

	$("#fondo").css({"height":$(window).height() + "px"}); //el fondo sera del alto de la ventana

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#iconoPrincipal").css({"margin-top": "-5px", "width": "50px","height":"50px"});

				$("header").css({"background-color": "black"});
				flag = true;
			}
		}else{
			if(flag){
				$("#iconoPrincipal").css({"margin-top": "150px", "width": "250px","height":"250px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

	$("#masInfoCeibal").click(function(){
		

	})

});