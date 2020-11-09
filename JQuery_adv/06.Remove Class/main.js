$(document).ready(function(){
	$("button").click(function(){
		$("h1,h2,p").removeClass(); //removes class can also do .removeClass("blue")
		$("div").removeClass();   //removes class can also do .removeClass("important")
	})
})