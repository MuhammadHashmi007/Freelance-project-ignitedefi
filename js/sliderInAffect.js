$(document).ready(function()
	{$(window).width()<320&&$(".js-slidein").removeClass("js-slidein"),
	$(".js-slidein").each(function(i){var s=$(this).offset().top;

   $(window).scrollTop()+$(window).height()>s&&$(this).removeClass("js-slidein")}),
	$(window).scroll(function()
		{$(".js-slidein")
		.each(function(i)
	{
		var s=$(this).offset().top+$(this).outerHeight()/3;

	$(window).scrollTop()+$(window).height()>s&&$(this).addClass("js-slidein-visible")})})
});



