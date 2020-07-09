/*
References and objects

when you define a variable this is what happens!

If its value is a primitive value (number, string or boolean), the variable contains this value directly.

If its value is an object, the variable contains the memory address of the object, we say that this variable
"points to" an object (or references this object). Accessing the variable will automatically resolve the reference,
meaning that the value of the variable is the referenced object.
*/

//let's see what happens when we copy a variable and modify the value of
//the variable that contains the copy

//with variables that have a "primitive" value
console.log("WITH PRIMITIVE TYPES!")
var x = 2;  //the variable x contains the primitive datum 2
console.log("x set to 2");

//"Copying" x into another variable
var x2 = x;
console.log("x2=x; x2 value after that: "+ x2);
console.log("modifying x2... x2 = 3");
//modifying copied variables
x2 = 3;
console.log("After that: x2 = "+x2 + " and x = " + x);
console.log("x HAS NOT BEEN MODIFIED! We COPIED the initial value of x into x2, and then changed x2 without changing x.");

console.log("\n\nNOW WITH OBJECTS!");
console.log("We've got y = {a:2};")
var y = {a:2} // the variable y references the object {a:2}
console.log("Type of y= "+typeof(y));   //object
console.log("y.a = " +y.a);     //y.a = 2
console.log("doing y2 = y and y3 = y...");
var y2 = y;
var y3 = y;
console.log("Modifying y2.a = 3");
y2.a = 3;

console.log("y2.a has for value:"+ y2.a);   //: 3
console.log("But... y.a has also for value:"+y.a + ", THE SAME!");  //:3
console.log("And y3.a has also for value: "+y3.a +", THE SAME!");   //:3
console.log("In fact y, y2 and y3 where pointing to the same object, they REFERENCED the same object in memory,changing y.a or y2.a or y3.a is equivalent here... ");

console.log("\n\nBut... if we do y2 = {a:10};");
y2 = {a:10};
console.log("We're not changing y or y3 as now, y2 references a new, different object in memory...");
console.log("Let's try changing y2.a and see if y.a changed, we do y2.a = 20");
y2.a = 20;
console.log("y2.a has now a value of: "+ y2.a +", and y.a has for value: "+y.a + " UNCHANGED!");//:20 , :3
