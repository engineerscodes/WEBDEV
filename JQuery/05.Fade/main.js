$(document).ready(function(){
   $("#button1").click(function ()
    {
         $("#div1").fadeToggle("fast");
         $("#div2").fadeToggle("slow");
         $("#div3").fadeToggle(30000);
   });
});

/*FADE TO*/

$(document).ready(function(){
   $("#button2").click(function ()
    {
         $("#div4").fadeTo("fast",0.69);
         $("#div5").fadeTo("slow",0.5);
         $("#div6").fadeTo("slow",0.8);
   });
});