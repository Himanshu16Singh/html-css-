let o = {}; //creation of an empty object
o.name = "Michel";

let o1 = new Object();  //same thing as line 1
o1.name = "Michel";

//But this does not work: "Uncaught TypeError: Cannot set property 'name' of undefined
//let o2;
//o2.name = "Michel";

//So... writing let o = {}; (or with properties and methods), or using "new" and ES5
//constructor functions or ES6 classes, as seen in Module 4, builds an object

//On all objects you can use properties and methods that are "inherited" fromt the predefined
//Object in JavaScript. We say "predefined object", but Java or C# programmers can also
//understand it as "predefined class"...

//Useful inherited methods: toString() and valueOf();
console.log("\n\nLet's try with an array ( arrays are objects, do you remember?)")

let t = [1,2,3];

console.log("t.valueOf() returns the value of t (as an array)...");
//Try typing t.valueOf() in the devtool console

console.log("t.toString() = " +t.toString());   // t.toString() = 1,2,3
console.log("t = " + t+ ", in this case, t.toString() is implicit");

console.log("\n\nLet's try with an object")
let p = {
    name:"Michel",
    age:52
}
 
//p.toString();
//"[object Object]"

//IN CONSOLE
t
[1,2,3]

t.valueOf()
[1,2,3]

//Array
let a1 = new Array(); // same as a1= []; use this instead!
let b1 = new Array(1,2,3);

b1;
[1,2,3]

var myArray = new Array(3);
undefined

myArray;
[undefined * 3]

b1.name = "I'm an array named b1!";
"I'm an array named a!"

b1.length;
3

a;
[1,2,3,name: "I'm an array named a!"]

// IN CONSOLE
var a = [3,5,1,7,'test'];
undefined

a.sort()
[1,3,5,7,'test']

a.push('new')
6

a.pop()
"new"

a.length
5

a.join("----");
"1----3----5----7----test"

a
[1,3,5,7,"test"]

a.slice(1,3);   // at index 1, 2    //it does not modify array
[3,5]

a
[1,3,5,7,"test"]    

a.splice(1,3,100,101,102);
[3,5,7]

a
[1,100,101,102,"test"]

a.splice(1,3)   //it modify array
[100,101,102]

a
[1,"test"]