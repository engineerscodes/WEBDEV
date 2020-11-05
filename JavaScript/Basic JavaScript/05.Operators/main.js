//typeof//returns type of variables
//instanceof //true if its a object of that class 


var x = 5, y = 10, z = 15;

x + y; //returns 15

y - x; //returns 5

x * y; //returns 50

y / x; //returns 2

x % 2; //returns 1

x++; //returns 6

x--; //returns 4

--x; //prefix 
/*
==	Compares the equality of two operands without considering type.
===	Compares equality of two operands with type and value should aslo match.
!== Compares equality of two operands with type and value should not  match.
!=	Compares inequality of two operands.
>	Checks whether left side value is greater than right side value. If yes then returns true otherwise false.
<	Checks whether left operand is less than right operand. If yes then returns true otherwise false.
>=	Checks whether left operand is greater than or equal to right operand. If yes then returns true otherwise false.
<=	Checks whether left operand is less than or equal to right operand. If yes then returns true otherwise false.
*/
var a = 5, b = 10, c = "5";
var x = a;

a == c; // returns true

x!==c//returs true
a === c; // returns false

a == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true

a >= c; // returns true

a <= c; // returns true


/*
&&	&& is known as AND operator. It checks whether two operands are non-zero (0, false, undefined, null or "" are considered as zero), if yes then returns 1 otherwise 0.
||	|| is known as OR operator. It checks whether any one of the two operands is non-zero (0, false, undefined, null or "" is considered as zero).
!	! is known as NOT operator. It reverses the boolean result of the operand (or condition)
*/
/*
=	Assigns right operand value to left operand.
+=	Sums up left and right operand values and assign the result to the left operand.
-=	Subtract right operand value from left operand value and assign the result to the left operand.
*=	Multiply left and right operand values and assign the result to the left operand.
/=	Divide left operand value by right operand value and assign the result to the left operand.
%=	Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.
*/
//Example: Ternary operator
var a = 10, b = 5;

var c = a > b? a : b; // value of c would be 10
var d = a > b? b : a; // value of d would be 5