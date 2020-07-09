var a = 1;
undefined

a;
1

window.a;
1

window['a'];
1

let z = 1; // LET DOES NOT DEFINE properties of the window object
undefined

window.z
undefined

document === window.document
true

navigator === window.navigator
true

parseInt('10 little children');
10

window.parseInt('10 little children');
10

alert === window.alert
true

prompt === window.prompt
true

window.addEventListener === addEventListener
true