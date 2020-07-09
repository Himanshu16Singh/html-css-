var num = 343 ;
undefined
num
343
typeof num
"number"
num = 1.23 ;
1.23
typeof num ;
"number"
num = -17;
-17
typeof num;
"number"
1e1
10
1e+1
10
2e+3
2000
typeof 2e+3;
"number"
2e-3
0.002
123.456E-3
0.123456
typeof 2e-3
"number"
098
98
var n3 = 0377;
undefined
n3
255
typeof n3;
"number"
var n4 = 0x00
undefined
typeof n4
"number"
n4
0
var n5 = 0xFF;
undefined
typeof n5
"number"
n5
255
0/0
NaN
3/0
Infinity
Infinity;
Infinity
typeof Infinity
"number"
typeof Infinity
"number"
1e309
Infinity
1e308
1e+308
var a = 6/0
undefined
a
Infinity
var i = -Infinity;
undefined
i
-Infinity
typeof i
"number"
Infinity-Infinity
NaN
-Infinity*3
-Infinity
Infinity/2
Infinity
Infinity-9999999999
Infinity
typeof NaN
"number"
var a = nanl
//Uncaught ReferenceError: nanl is not defined
//at <anonymous>:1:9
// (anonymous) @ VM2486:1

var a = NaN;
undefined
a
NaN
var a = 10*"f';
//VM2572:1 Uncaught SyntaxError: Invalid or unexpected token
var a = 10*"f";
undefined
a
NaN
1+2+a;
NaN
0.1+0.2
0.30000000000000004
2^52
54