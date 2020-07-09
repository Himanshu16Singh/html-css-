window.onload = init;

var names = ["try",'catch','default','hi']
var Worddiv = document.querySelector("#Worddiv");

function init(){
    for( var i = 0 ; i<names.length ; i++){
        Worddiv.innerHTML = names[i];

    }
}