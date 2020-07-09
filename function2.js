/*
function init(){
    function sum(a,b){
        // this function returns a result
        return (a+b) ;
    }
    
    function displayInPage(message,value){
        // this function does not return anything
        document.body.innerHTML += message + value + "<br>";
    }
    
    var result = sum(3,4);
    displayInPage("Result: ",result);
    
    // we could have written this
    displayInPage("Result: ",sum(10,15)) ;
}
*/

// OR

function init(){
    var sum = function(a,b){
        return(a+b);
    };
    
    var displayInPage = function(message,value){
        // this function does not return anything
        document.body.innerHTML += message +value + "<br>";
    };

    var result = sum(3,4);
    displayInPage("Result: ",result);

    // we could have written this
    displayInPage("Result: ",sum(10,15));
}