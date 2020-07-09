window.onload = init;

var menu, menuIsVisible;

function init(){
    menu = document.querySelector("#context-menu");
    menuIsVisible = false;
    /* to attach a context menu to all divs , you can do this:
    var divs = document.querySelectorAll(".div");
    divs.forEach(function(d){
        addContextMenu(d);
    }) ;*/

    //attache the context menu to the first div
    var div1 = document.querySelector("#div1");
    addContextMenu(div1);

    //Clicking anywhere on the window toggle the menu off
    window.addEventListener('click',toggleMenuOff);
}

function addContextMenu(elem){
    elem.addEventListener("contextmenu",function(e){
        // console.log("contextmenu activated";)
        e.preventDefault() ; // avoids default right click menu
        toggleMenuOn();
        positionMenu(e);
    })
}

function toggleMenuOn(){
    if(!menuIsVisible){
        menuIsVisible=true;
        menu.classList.add("context-menu--active"); //see further in the DOM section of the course
    }
}

function toggleMenuOff(){
    if(menuIsVisible){
        menuIsVisible=false;

        menu.classList.remove("context-menu--active");
    }
}