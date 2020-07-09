var divElem2;

function init2() {
    console.log("page loaded and DOM is ready");

    //use the selection API to select the div
    divElem2 = document.querySelector("#theDiv2");
}

var currentImage = 0;
var leftPos = 0;

function animateMario() {
    drawMario(currentImage);

    //next time, move mario 5 pixels to the right
    leftPos += 5;

    //And if he moved 100 pixels, start back from the left
    if(leftPos>=100)
        leftPos = 0;
}

function drawMario(indexImage) {
    //set the left pos of the div using the left margin
    divElem2.style.marginLeft = leftPos + "px";
    
    //change the width and height of the div
    divElem2.style.width = "22px" ;
    divElem2.style.height = "32px" ;

    //remove the text inside the div
    divElem2.innerHTML = "";

    //set the background image
    divElem2.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)" ;

    // remove the background color
    divElem2.style.backgroundColor="transparent" ;

    //select the starting pos in the background image
    var offset = indexImage*24;
    divElem2.style.backgroundPosition = offset+"px";
}