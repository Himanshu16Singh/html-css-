// in console
var s = 'Himanshu'; // much like arrays of characters
undefined

s[0]
"H"

s[1]
"i"

s.length;
8

s.push(' Singh');
Uncaught TypeError: s.push is not a function

s[s.length] = 'S';  // add 'S' at the end?
"S"

s[s.length] = 'u';  // add 'u' at the end?
"u"

s[s.length] = 'f';  // add 'f' at the end?
"f"

s;  //s remained unchanged
"Himanshu"

var s = 'Himanshu';
undefined

s[0] = "S"; //trying to change the 'H' into an 'S'
"S"

s;  // no luck!
"Himanshu"

s.splice(0,3);

Uncaught TypeError:s.splice is not a function

var s = "Himanshu" ;
undefined

s = "Hello " + s;
"Hello Himanshu"

s = 'O' +s; //equivalent to push('O') with arrays
"OHello Himanshu"

var s = 'Himanshu' ;
"Himanshu"

s += ' Singh';
"Himanshu Singh"

s;
"Himanshu Singh"

var s1 = 'Himanshu';
undefined

var s2 = 'Singh';
undefined

var s3 = s1 + " " + s2; // + can be used to concat more than 2 strings
undefined

s3;
"Himanshu Singh"

var s4 = s1.concat(s2);
undefined

s4;
"HimanshuSingh"

var s5 = s2.concat(s1);
undefined

s5;
"SinghHimanshu"

//check
var s = 'Himanshu';
undefined

s = s.substring(0, s.length-1); // equivalent to the pop method
"Himansh"

//out  of console

var s = 'Himanshu' ;
function removeChars(s,startIndex,numberOfCharsToRemove){
    return s.substring(0,startIndex)+s.substring(startIndex + numberOfCharsToRemove);
}

//remove 3 consecutive chars from s, starting at index = 1
s = removeChars(s,1,3);

console.log(s); // will display "Hnshu" in the console

function replaceAt(s,index,character){
    return s.substr(0,index)+character+s.substr(index+character.length);
}

var s2 = "JavaScript";
s2 = replaceAt(s2,1,"o");

console.log(s2); //will display "JavaScript"

//check
// it also works with a string instead of a simple char
s2 = replaceAt(s2,0,"Coca");
console.log(s2);    //Will display "CocaScript"