/*
    When a string contains at 
    least a single quote, use double quotes at the beginning and at the end of the string value.
*/
"Hello World";
"Hello World"
"JavaScript Course"
"JavaScript Course"
var s = "I/'m the king of the world"
undefined
s
"I/'m the king of the world"
var s = "I'm the king of the world"
undefined
s
"I'm the king of the world"
var s = I"'"m the king of the world
//VM529:1 Uncaught SyntaxError: Unexpected string
var s = "himanshu"
undefined
s
"himanshu"
var s = 'I/'m the king of the worl'd
//VM599:1 Uncaught SyntaxError: Unexpected identifier
var s = 'I/'m the king of the world'
//  VM614:1 Uncaught SyntaxError: Unexpected identifier

// converting an number into string
var n = 1;
undefined
typeof n;
"number"
n=""+n;
"1"
typeof n;
"string"




// and
var s = "hello"
undefined
var a = 'hi'
undefined
var s1 = 'm friend"
// VM796:1 Uncaught SyntaxError: Invalid or unexpected token
var s1 = 'hello "my name is himanshu and i" '
undefined
s1
"hello "my name is himanshu and i" "
a
"hi"
var s1 = 'hello "my name is himanshu and i\'m am " '
undefined
s1
"hello "my name is himanshu and i'm am " "
var s1 = "My\nName\Is\Himanshu
VM1016:1 Uncaught SyntaxError: Invalid or unexpected token
var s1 = "My\nName\Is\Himanshu"
undefined
s1
"My
NameIsHimanshu"
var s1 = "My\nName\nIs\nHimanshu"
undefined
s1
"My
Name
Is
Himanshu"
var s = "c:\\my files"
undefined
s
"c:\my files"
"my name is"+"hiamsnhu singh"
"my name ishiamsnhu singh"
var z = 10;
undefined
var s = "Value of x " + x 
// VM1330:1 Uncaught ReferenceError: x is not defined
    // at <anonymous>:1:25
// (anonymous) @ VM1330:1
var s = "Value of x " + z
undefined
s
"Value of x 10"
s
"Value of x 10"
typeof z
"number"
typeof s
"string"
x = ""+10;
"10"
typeof x
"string"
var s1 = 'one'
undefined
var s2 = 'two'
undefined
var s = s1+s2
undefined
s
"onetwo"
var s = "hello "
undefined
s += " my friends"
"hello  my friends"
s2 = "10"
"10"
typeof s2
"string"
var result = s*2;
undefined
result
NaN
s2 = s2*2
20
typeof s2
"number"
s2 = "hello"
"hello"
s2 = s2*2
NaN