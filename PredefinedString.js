//It is for number
var n = 123.456;
123.456

n.toFixed(1);   //sets the number of digits for the decimal part of the number
"123.5"

n = new Number(123.456);    // same as n = 123.456 Number{[[PrimitiveValue]]: 123.456} 
// well , not exactly, but when you use n, it is equivalent

n.toFixed(1);
"123.5"

n.toExponential();
"1.23456e+2"

var n = 255;
undefined

n.toString();
"255"

n.toString(10); //in base 10
"255"

n.toString(16); //in base 16
"ff"

(3).toString(2);
"11"

(3).toString(10);
"3"

//NOW FOR STRING
var name = 'Michel';    //use this rather than using new String(...)
undefined

name
"Michel"

name[0] = 'Z';
"Z"

name
"Michel"

name += "says Hello"
"Michel says Hello"

name.length
17

name.toUpperCase()
"MICHEL SAYS HELLO"

name
"Michel says Hello"

name = name.toUpperCase()
"MICHEL SAYS HELLO"

name
"MICHEL SAYS HELLO"

name = name.toLowerCase()
"michel says hello"

name
"michel says hello"

name.indexOf('c');
2

name.indexOf('l');
5

name.lastIndexOf('1');
15

name.charAt(5);
"l"

name.toUpperCase.lastIndexOf('L');
15

name.substring(0,3);
"mic"

name.substring(3,5);
"he"

name.slice(3,5);
"he"

name.split(' ');
["michel","says","hello"]

name.split('l');
["miche"," says he","","o"]

name.split(' ').join('----');
"michel----says----hello"
