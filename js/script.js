$(function(){

	 // scroll to About
    $('.see_more i').click(function () {
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1000);
    });

});