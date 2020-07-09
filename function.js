function sum(a,b){
    var c = a+b;
    return c;
}
undefined
var result = sum(1,2);
undefined
//result is equal to 3
undefined
console.log(result)
VM3937:1 3
undefined
var result = sum(1);
undefined
console.log(result)
VM3974:1 NaN
undefined
 fum
// VM3986:1 Uncaught ReferenceError: fum is not defined
    // at <anonymous>:1:1
// (anonymous) @ VM3986:1
function f(){
    return arguments;
}
undefined
f();
Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
// returns []
undefined
//returns [1,2,3,4,true,'himanshu singh']
undefined
f(1,2,3,4,,true,'himanshu singh');
// VM4309:1 Uncaught SyntaxError: Unexpected token ','
f(1,2,3,4,true,'himanshu singh');
Arguments(6) [1, 2, 3, 4, true, "himanshu singh", callee: ƒ, Symbol(Symbol.iterator): ƒ]

// sum with a variable number of arguments
undefined
function newSum(){
    var i , res = 0;
    var numberOfParameters = arguments.length;
    for(i=0;i<numberOfParameters;i++){
        res += arguments[i];
    }
    return res;
}
undefined
newSum(1,1,1)
3
newSum(1,1,1,1,1)
5