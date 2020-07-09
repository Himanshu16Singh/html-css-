/*
function changeBackgroundOfPs(){
    var changeBackgroundOfPs = document.querySelector("#firstDiv");
    changeBackgroundOfPs.style.backgroundColor = "red";
}
*/

function changeBackgroundOfPs(id){
var paragraphs = document.querySelectorAll("#"+id+" p");

//Another way to iterate on all elements in a collection
for(var i = 0  ; i<paragraphs.length ; i++){
paragraphs[i].style.backgroundColor = "lightGreen";
}
}