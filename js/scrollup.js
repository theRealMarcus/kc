$(document).ready(function(){

//Check to see if the window is top if not then display button
// $(window).scroll(function(){
// 	if ($(this).scrollTop() > 100) {
// 		$('.bttt').fadeIn();
// 	} else {
// 		$('.bttt').fadeOut();
// 	}
// });

//Click event to scroll to top
$('.bttt').click(function(){
	$('body').animate({scrollTop : 0},800);

});

})