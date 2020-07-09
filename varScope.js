var x= 1;

// global scope
function f1(){
  console.log(x); //displays '1' in console
 
}
function f2(){
  var y = x ; //scope variable
}
// console.log(y);
f2();

let a = 1; //global variable

function f(){
  if(true){
    let a = 4 ;// this 'a' is LOCAL to the block
    
  }
  console.log(a) ;// alerts '1' , a is the global variable
  // if I declare a local variable, it's no more local to the whole function
  // in which  it is defined , but it is local to block of instructions 🐱‍👓
}
f()



