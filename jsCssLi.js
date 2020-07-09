function firstLiClassRedInUl(){
// first li of class="red" in a ul
var elm=document.querySelector(".red");
elm.style.color = "red";
}

function allLisInUlOfClassNav(){
// get all li directly in a ul of class nav
var list = document.querySelectorAll(".nav ");
list.forEach(function(elm){
    elm.style.textDecoration = "underline";
});
}