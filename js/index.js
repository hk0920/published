$(function(){

	$("html, body").animate({scrollTop:0},1000);/*새로고침을 해도 맨위로 가는것 */
	
	
	$(".header_inner > div").toggle(function(){
		$(this).css("background","url(images/menu_after.png) no-repeat 100% 18px");
		$(this).next().css("display","block");
	},function(){
		$(".header_inner > div").css("background","url(images/menu.png) no-repeat 100% 13px");
		$(".header_inner > div").next().css("display","none");
	});

	
	







});