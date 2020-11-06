//console.log("Connected");

var x = 5 + "JS";
var a=9,c=9,b=-1;

document.getElementById("test").innerHTML=x;

document.getElementById("test").innerHTML=((a==c) || (b==c)) +"<br>"+(x==a);

//Arrays and Objects

var car=["naveen","virat"]

document.getElementById("test2").innerHTML=car[0];

var obj ={
    firstname :"M",
    Lastname :"naveen",
    age :19
};

document.getElementById("objects").innerHTML="My Name is"+obj.firstname+" "+obj.Lastname+" and Age is "+obj.age;