var canvas,ctx;

window.onload = init;
function init(){
canvas = document.querySelector('#myCanvas');
ctx = canvas.getContext('2d');

drawTwoRectangles();
}

function drawTwoRectangles(){
ctx.fillStyle = 'blue';
ctx.fillRect(10,10,100,100);
ctx.fillStyle = 'red';
ctx.fillRect(120,10,50,50);
}