$(document).ready(function() {
	$('.summary').click(function(e){
		e.preventDefault();
		$(this).next().slideToggle();
	});

	// $('.summary').hover(
	// 	function() {
	// 	$(this).find('i').css('visibility', 'visible');
	// }, function() {
	// 	$(this).find('i').css('visibility', 'hidden');
	// 	}
	// );


	$('.closedivbutton').click(function(e){
		e.preventDefault();
		$(this).closest('.showmessage').slideUp();
	});

	$('.closebutton').click(function(e){
		e.preventDefault();
		$(this).closest('.showmessage').slideUp();
	});

	$('.menubutton').click(function(){
		$('.mainmenu').toggleClass('active');
	});

	$('.checkbutton').click(function(){
		$('.checkmenu').toggleClass('active');
	});

	$('.username').click(function(){
		$('.usernamemenu').toggleClass('active');
	});

	$('.replymenu').click(function(){
		$('.replymenudiv').toggleClass('active');
	});

	$('.details').click(function(e){
		e.preventDefault();
		$(this).closest('.messagediv').find('.expand_details').slideToggle('active');
	});

	$('.replymenu').mouseenter(function(){
		$('.middleline').hide();
	});

	$('.replymenu').mouseleave(function(){
		$('.middleline').show();
	});


	$('.reply').click(function(e){
		e.preventDefault();
	    var $container = $(this).closest('.showmessage');
	    $container.find('.replybox').slideDown();
	    setTimeout(function(){
	        $container.find('.replybox2').fadeIn(100);
	    },500);
	    $container.find('.replydivbutton').slideUp();
	});




	$('.replydivbutton').click(function(){
	    var $container = $(this).closest('.showmessage');
	    $container.find('.replybox').slideDown();
	    setTimeout(function(){
	        $container.find('.replybox2').fadeIn(100);
	    },500);
	    $container.find('.replydivbutton').slideUp();
	});



	$('.replylist li:nth-child(4)').click(function(){
		var $container = $(this).closest('.showmessage');
		$container.find('.replydivbutton').fadeIn();
		$('.replybox').hide();
		$('.replybox2').css('margin-top', '0');
		$('.replybox2').fadeOut();
	});
});
