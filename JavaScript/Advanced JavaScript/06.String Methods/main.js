var str="I am Naveen am";

document.getElementById('test').innerHTML="String is : "+str+"<br>Begin index of am :"+str.indexOf('am')+"<br>"+"End index of am :"+str.lastIndexOf("am")+"<br> String length :"+str.length;

var s="Google in Pro and it Git is Super Pro";

var temp=s.slice(1,13);

document.getElementById('test2').innerHTML="STRING S : "+s+"<br>After SLICE  1-13 & note 13 is not included :"+temp;