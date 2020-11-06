var x="100"
var y="10"

document.getElementById('test').innerHTML="String devision "+"'100'/'10':"+x/y;

var r=123; //integer

var obj= new Number(r);  //object

var e=1.94509;
document.getElementById('nav').innerHTML="var r=123 Type is :"+typeof(r)+"<br>obj= new Number(r) :"+typeof(obj)+"<br>Rounf off using e.toPrecision() for intger only var e=1.94509 :"+e.toPrecision(2);


document.getElementById('nav2').innerHTML=" CHECK IS Number <br>"+
    Number(true) +"<br>" +
    Number(false) +"<br>" +
    Number("10") +"<br>" +
    Number(" 10") +"<br>" +
    Number(" 10 ") +"<br>" +
    Number("10.33") +"<br>" +
    Number("10,33") +"<br>" +
    Number("10 33") +"<br>" +
    Number("Learn Naveen") +"<br>" ;

