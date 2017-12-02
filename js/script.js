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
// caja Desarrollo
	$( "#titleCaja1" ).mouseenter(function() {
		$("#title1").fadeIn();
	});

	$("#titleCaja1").click(function(){
		$("#modalTitle1").modal();
	});

	$( "#titleCaja1" ).mouseleave(function() {
		$("#title1").fadeOut();
	});

// caja Diseño
	$( "#titleCaja2" ).mouseenter(function() {
		$("#title2").fadeIn();
	});

	$("#titleCaja2").click(function(){
		$("#modalTitle2").modal();
	});

	$( "#titleCaja2" ).mouseleave(function() {
		$("#title2").fadeOut();
	});

// caja diferencias
	$( "#titleCaja3" ).mouseenter(function() {
		$("#title3").fadeIn();
	});

	$("#titleCaja3").click(function(){
		$("#modalTitle3").modal();
	});

	$( "#titleCaja3" ).mouseleave(function() {
		$("#title3").fadeOut();
	});

// caja html
	$( "#titleCaja4" ).mouseenter(function() {
		$("#title4").fadeIn();
	});

	$("#titleCaja4").click(function(){
		$("#modalTitle4").modal();
	});

	$( "#titleCaja4" ).mouseleave(function() {
		$("#title4").fadeOut();
	});

// caja CSS
	$( "#titleCaja5" ).mouseenter(function() {
		$("#title5").fadeIn();
	});

	$("#titleCaja5").click(function(){
		$("#modalTitle5").modal();
	});

	$( "#titleCaja5" ).mouseleave(function() {
		$("#title5").fadeOut();
	});

// caja JavaScript
	$( "#titleCaja6" ).mouseenter(function() {
		$("#title6").fadeIn();
	});

	$("#titleCaja6").click(function(){
		$("#modalTitle6").modal();
	});

	$( "#titleCaja6" ).mouseleave(function() {
		$("#title6").fadeOut();
	});

// caja Bootstrap
	$( "#titleCaja7" ).mouseenter(function() {
		$("#title7").fadeIn();
	});

	$("#titleCaja7").click(function(){
		$("#modalTitle7").modal();
	});

	$( "#titleCaja7").mouseleave(function() {
		$("#title7").fadeOut();
	});

// caja JQuery
	$( "#titleCaja8" ).mouseenter(function() {
		$("#title8").fadeIn();
	});

	$("#titleCaja8").click(function(){
		$("#modalTitle8").modal();
	});

	$( "#titleCaja8").mouseleave(function() {
		$("#title8").fadeOut();
	});

// caja JSon
	$( "#titleCaja9").mouseenter(function() {
		$("#title9").fadeIn();
	});

	$("#titleCaja9").click(function(){
		$("#modalTitle9").modal();
	});

	$( "#titleCaja9").mouseleave(function() {
		$("#title9").fadeOut();
	});

// Caja METODOLOGICAS
	$( "#titleCaja10").mouseenter(function() {
		$("#title10").fadeIn();
	});

	$("#titleCaja10").click(function(){
		$("#modalTitle10").modal();
	});

	$( "#titleCaja10").mouseleave(function() {
		$("#title10").fadeOut();
	});









});

