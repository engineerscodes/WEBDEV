var user =
{name:"NAVEEN",
gender :"Male",
Age:19,
fulluser :function ()
{
	return this.name+" is "+this.gender +" and "+this.Age+" yr Old."; //must use this keyword
}
};

document.getElementById('test').innerHTML= user.fulluser();