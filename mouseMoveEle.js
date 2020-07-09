window.onload = init;

function init(){
    // page has been loaded
    canvas = document.querySelector('#myCanvas');

    canvas.addEventListener('mousemove',processMouseMove)
}

function processMouseMove(evt){
    var mousePositions = document.querySelector('#mousePositions');
    var rect = evt.target.getBoundingClientRect();
    var mouseX = evt.clientX-rect.left;
    var mouseY = evt.clientY-rect.top;

    mousePositions.innerHTML = "mouse pos X: "+mouseX + "mouse pos Y: "+ mouseY +"<br>"
}