$(document).ready(function(){
   $("#flip").click(function(){
     $("#panel").slideDown(5000);
   });
   $("#Stop").click(function(){
   	$("#panel").stop();
   });
});