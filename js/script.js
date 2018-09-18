$(window).load(function(){

	$("#wholepage").fadeOut("slow");
	
});

$(document).ready(function(){

	width = $(window).width();
	height = $(window).height();
	
	$(".sec").css({'height':height});
	$(".section").css({'width':width});	
	$(".seprator").css({'height':(height-500)/2});
	
	$("#loading").css({'top':(height-150)/2});
	$("#loading").css({'left':(width-100)/2});
	
});

$(function(){
	
	$(".ser").click(function(){
	
		var myatr=$(this).attr("id");
		
		if(myatr=="ser1")
		{
			document.getElementById('mainheading').innerHTML="Events";
			document.getElementById('mainpara').innerHTML="Dealer/ Trade Meets, Product Launches, Press Conferences, HR Conferences, B2B Conferences, Exhibitions, Sales Conferences, MICE, Internal Marketing Events, Entertainment Events";
		}
		if(myatr=="ser2")
		{
			document.getElementById('mainheading').innerHTML="Consumer Activation";
			document.getElementById('mainpara').innerHTML="Roadshows, Sampling and Demonstration Programmes, Mall Promotions, School Contact Programmes, In Shop Activations, RWA Activation, Corporate Contact Programmes, HO RE CA Promotions";
		}
		if(myatr=="ser3")
		{
			document.getElementById('mainheading').innerHTML="Trade/Retail";
			document.getElementById('mainpara').innerHTML="Trade And Retail Audits, Mystery Shopper Programmes, Merchandising Programmes, POS/POP Production, Shop In Shop, Brand Shops, ISP's ";
		}
		if(myatr=="ser4")
		{
			document.getElementById('mainheading').innerHTML="Design Solutions";
			document.getElementById('mainpara').innerHTML="Corporate Identity Manual, Emblems/Symbols/Mnemonics/Logo/Trademark, Office Stationary: letterheads/envelopes/visiting cards, Conference kits, Certificates, Newsletters, Direct Mailer with Envelope, Brochures & Booklets, Annual Reports, Instruction manual,, Guarantee & Warranty Card, Calendars - conceptual, wall, table, pocket";
		}
		if(myatr=="ser5")
		{
			document.getElementById('mainheading').innerHTML="Films/Avs";
			document.getElementById('mainpara').innerHTML="Corporate AVs, Marketing & Sales AVs, Product Films, Motivational AVs, Documentaries, Demos and walk-throughs ";
		}
		
		
	});

	$("#menu a").click(function(){
		$('body').scrollTo($(this).attr("href"), "slow" );
	});

	$("#aboutmenu").hover(function(){
		$("#subabout").stop().slideToggle("slow");
	});
	
	$("#workmenu").hover(function(){
		$("#subwork").stop().slideToggle("slow");
	});

});

var smallc = 0;
var medc=0;
var timer = $.timer(function() {
	$("#smallclouds").animate({'background-position' : -smallc},1);
	$("#medclouds").animate({'background-position' : -medc},1);
	smallc=smallc+0.5;
	medc=medc+1;
});
timer.set({ time : 1, autostart : true });