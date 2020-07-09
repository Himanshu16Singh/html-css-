/*
window.onload = init;
function init(evt){
    // called when the page is loaded
    
    console.log("page loaded");


    let span = document.querySelector('#pageStatus');
    span.innerHTML = "PAGE LOADED"; //adding to html page

    let b = document.querySelector('#myButton');

    // click event
    b.addEventListener('click',function(evt){
        console.log("button : "+ evt.button);
    })

    //mousemove event
    b.addEventListener('mousemove',function(evt){
        console.log("mouse move " );
        console.log("x = "+evt.clientX);
    })

    // 
}
*/

window.onload = resize;
window.onresize = resize;

function resize(evt){
    console.log("resize");
    var pageSizeSpan = document.querySelector('#pageSize');
    pageSizeSpan.innerHTML = "Width: "+window.innerWidth + "Height: "+window.innerHeight;

    //screen size
    var screenSizeSpan = document.querySelector('#screenSize');
    screenSizeSpan.innerHTML = "width: "+screen.width + "Height: "+screen.height;
}