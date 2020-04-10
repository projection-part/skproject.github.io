
$(document).ready(function() {
  $(".skitter-large").skitter({
	  label: false,
	  dots:false,
  });
});

$(document).ready(function(){
	$(".center").slick({
		dots:false,
		infinite:true,
		
		slidesToShow:5,
		slidesToScroll:3,
		
			
	});
});
$(document).ready(function(){
	$(".cse").click(function(){
		$(".dropdown-cs").slideToggle(600);
	});
});
$(document).ready(function(){
	$(".me").click(function(){
		$(".dropdown-me").slideToggle(600);
	});
});