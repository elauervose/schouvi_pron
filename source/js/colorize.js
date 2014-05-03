$(function(){
	
	
$("#color1").click(function(){
		
		$('body > div').removeClass();
		$('body > div').addClass('colorskin-1');
		
		
	});
	
	
	$("#color2").click(function(){
		
		$('body > div').removeClass();
		$('body > div').addClass('colorskin-2');
		
		
	});
	
$("#color3").click(function(){
		
	$('body > div').removeClass();
	$('body > div').addClass('colorskin-3');
	
		
	});

$("#color4").click(function(){
	
	$('body > div').removeClass();
	$('body > div').addClass('colorskin-4');
	
	
});

$("#color5").click(function(){
	
	$('body > div').removeClass();
	$('body > div').addClass('colorskin-5');
	
	
});

$("#color6").click(function(){
	
	$('body > div').removeClass();
	$('body > div').addClass('colorskin-6');
	
	
});

$("#color7").click(function(){
	
	$('body > div').removeClass();
	$('body > div').addClass('colorskin-7');
	
	
});

$("#color8").click(function(){
	
	$('body > div').removeClass();
	$('body > div').addClass('colorskin-8');
	
	
});

$("#color9").click(function(){
	
	$('body > div').removeClass();
	$('body > div').addClass('colorskin-9');
	
	
});

$("#color10").click(function(){
	
	$('body > div').removeClass();
	$('body > div').addClass('colorskin-10');
	
	
});
	


$('#layout-selector').change(function(){
	
	if($('#layout-selector').val()=='Boxed')
		{
		$('#wrap').attr('id', 'boxed-wrap');
		
		}
	else{
		$('#boxed-wrap').attr('id', 'wrap');
		
	}
		
	
});

$('.pattern-selector').click(function(){
	
	
	$('body').css('background', 'url('+$(this).attr('title') +') repeat');
	
});


jQuery('#style-selector').hide(200);
		
jQuery('#t-row-left-ss').hide();

jQuery('#t-row-left-ss').click(function(){
	
	jQuery('#style-selector').hide(200);
		
	jQuery('#t-row-left-ss').hide();
		
		
});
jQuery('#t-row-right-ss').click(function(){
	
	jQuery('#style-selector').show(300,function(){
		
		jQuery('#t-row-left-ss').show();
		
	});
	
	
});

});
