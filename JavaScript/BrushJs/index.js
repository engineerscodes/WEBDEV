console.log("HELLO WORLD!!!!!!!!!!!!!!!!!!!!");

let names;  //by default varibale are assigned to value undefined in Js 
console.log(names);

names="naveen"
console.log(names);

let lstname="m",first;
first="PRAVEEN"

console.log(lstname,first);

// variable value 

let interestRate =0.3;

interestRate=100;
console.log("Interest Rate "+interestRate)

//constant Value
const values =50;
//values=100; //index.js:23 Uncaught TypeError: Assignment to constant variable.
console.log("CONST VALUE : "+values);

//varibles Type 

//1)Primitive type
  //String ,boolean,Number,null ,undefined
  let nameStr="mknaveen837@gmail.com"; //string literal

  let bulleye=true; //boolean literal

  let num=30; //number literal

  let null_value=null;

  let n=undefined;


  console.log( typeof(  nameStr) +" "+ typeof( bulleye)+" " +  typeof( num)+" " + typeof( null_value)+" " + typeof( n));





//2)refernces Type
//object ,array,functions

//OBJECT Literal ={} is used to create object Literal
//Should have key value pair key are called attributes

let person ={
   name :"Naveen",
   Age  : 19
}
//accesing the attributes
//using dot
person.name="PRAVEEN __JAMES";
person.Age=1000;

console.log(person);

//using []

person['name']="TONY ";
person['Age']=53;


console.log(person)


//Arrays
//length of array can change and aslo can have mixed type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let elements =["dcfv","rcb","fev","rgffref"]
elements[0]=56
elements[10]=9999
console.log(elements)
console.log(elements.length);


//functions


