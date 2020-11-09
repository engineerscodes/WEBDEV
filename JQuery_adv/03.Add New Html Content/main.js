function appendText() 
{
	var t1="<p>new text : VIRAT</p>"; //created text with html
	var t2=$("<p></p>").text("MK"); // can also create text with jQuery
	var t3=document.createElement("p");
	t3.innerHTML="Using DOM";  //Created text using DOM 

	$("body").append(t1,t2,t3); //adding new element to the page using jquery
}


$(document).ready(function(){
  $("#before").click(function(){
     $("img").before("<b>Before</b>");
  });

   $("#after").click(function(){
     $("img").after("<i>After</i>");
  });
});