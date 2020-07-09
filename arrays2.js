let mysrr = ['red','blue','yellow','purple'];

// each element has an index,starting ar 0
//in console
myarr[0]
"red"

typeof myarr
"object"

myarr.length
4

myarr[myarr.length -1 ]
"purple"

myarr.push('orange');
5

myarr
["red","blue","yellow","purple","orange"]

myarr[myarr.length] = 'green';
"green"

myarr
["red","blue","yellow","purple","orange","green"]

myarr.sort();
["blue","green","orange","purple","red","yellow"]

// out of console
let persons = [
    {givenName: 'Himanshu', familyName: 'Singh', age: 20},
    {givenName: 'Pig', familyName: 'Badine', age:32},
    {givenName: 'Pirate', familyName: 'Prentice', age:22}
];

//in console
persons[0]
// 1st element
Object {
    age: 20,
    familyName: "Singh",
    givenName: "Himanshu"
}

persons[0].givenName
"Himanshu"

//outside of console
function compareByAge(a,b) {    //comparison function for element
    if(a.age < b.age)   //compare by age
        return -1;
    if(a.age > b.age)
        return 1;
    return 0;
}       

// in console
persons.sort(compareByAge);
[Object {
    age: 20,
    familyName: "Singh",
    givenName: "Himanshu"
}, Object {
    age: 22,
    familyName: "Prentice",
    givenName: "Pirate"
}, Object {
    age: 32,
    familyName: "Badine",
    givenName: "Pig"
}]

persons
[Object {
    age: 20,
    familyName: "Singh",
    givenName: "Himanshu"
}, Object {
    age: 22,
    familyName: "Prentice",
    givenName: "Pirate"
}, Object {
    age: 32,
    familyName: "Badine",
    givenName: "Pig"
}]

persons.splice(0,1);
[Object {
    age: 20,
    familyName: "Singh",
    givenName: "Himanshu"
}]

persons
[Object {
    age: 22,
    familyName: "Prentice",
    givenName: "Pirate"
}, Object {
    age: 32,
    familyName: "Badine",
    givenName: "Pig"
}]

persons.pop();
Object {
    age: 32,
    familyName: "Badine",
    givenName: "Pig"
}

persons
[Object {
    age: 22,
    familyName: "Prentice",
    givenName: "Pirate"
}]

// in console
var a = [1,2,3];

a[2] = 'three';
"three"

a
[1,2,"three"]

a[4] = 4;
4

a;  //check
[1,2,"three",undefined*1,4]

// what happen if we write a.splice(5,1)
a.splice(3,1);  // remove element at the third index, the undefined one!
[undefined * 1]

a;
[1,2,"three",4] // it's no more here

a.splice(0,2);//remove the two first elements
[1,2]

a;
["three",4]

a.splice(a.length-1);   //remove the last element
4

a;
["three"]

//delete method is not good removing elements
delete a[0];
true

a;
[undefined * 1] // the element became undefined but it's still in the array!

var a = [ [1,2,3] , [4,5,6] ]; // a is a matrix:2 rows, 3 columns.
undefined

a[0]; //first row
[1,2,3]

a[1]; //second row
[4,5,6]

a[0][1]; //second element, first line
2

a[0][2]; // third element, first line
3

a[1][0]; //first element, second line
4

a[1][1]; //second element, second line
5

var a = [];
undefined

a[0] = [1,2,3,4,5];
[1,2,3,4,5]

a[1] = ['michel' , 'henri' , 'francois'];
["michel","henri","francois"]

a
[Array(5) , Array(3)]