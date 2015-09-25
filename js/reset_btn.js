
function setup_reset_btn(){
	$('#reset').on('click', function(){
		alert("Game Reset");
		 first = true;
		 $('li').text('_');
		 $('li').removeClass('disable');
		 $('li').removeClass('o');
		 $('li').removeClass('x');
	});
}
