NaN == NaN;
false
NaN === NaN;
false
isNaN(NaN);
true
isNaN(0/0);
true
isNaN(12);
false
isNaN('foo');
true
var x = NaN;
undefined
x ===x;
false
x !==x;
true
var num = NaN || 0;
undefined
num
0
parseInt('foo');
NaN
parseInt('22');
22
Math.sqrt(-1);
NaN