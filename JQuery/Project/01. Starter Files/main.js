
function  retirementYear(n) 
{

	var age=document.getElementById('Age').value;

	var retirage=document.getElementById("retirementAge").value;

	if(age<=100)
	{

	}
	if(retirage<=100)
	{

	}

	var retirement=parseFloat(retirage -age);

	var result= new Date().getFullYear() + retirement;


	document.getElementById('finalScoreText').innerHTML = "Your are "+ age + " years old. " ;
document.getElementById('retire').innerHTML = "You want to be " + retirage + " years old when you retire." ;
document.getElementById('result').innerHTML = "In " + result + " you can retire.";
}

$(document).ready(function(){
  $(".btn2").click(function(){
     $(".test").show();
  });
});