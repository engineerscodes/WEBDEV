//console.log("Done");
$(document).ready(function(){
	$("button").click(function(){
      $("#div1").remove();
	});

	$("#button2").click(function(){
      $("#div1").empty();
	});
});