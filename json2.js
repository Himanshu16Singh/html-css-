function search(){
    //Send an XhR2 query. See HTML5 games and Apps MOOC at W3Cx
    //for detailed explanation about XhR2
    var queryUrl = "https://jsonplaceholder.typicode.com/users";

    var xhr = new XMLHttpRequest();
    xhr.open('GET',queryUrl,true);

    xhr.onload = function(e){
        // console.log("Response arrived");
        // console.log(xhr.response);
        var users = JSON.parse(xhr.response);

        // console.log("first user: "+JSON.stringify(users[0]));
        displayUsersAsATable(users);
    }

    //in case of error
    xhr.onerror = function(err){
        console.log("Error: "+err);
    }
    
    //sends the request
    xhr.send();

}

function displayUsersAsATable(users){
    //users is a JavaScript object

    //empty the div that contains the results
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";

    //creates and populate the table with users
    var table = document.createElement("table");

    users.forEach(function(currentUser){
        // console.log(currentUser.name);
        var row = table.insertRow();
        row.innerHTML = "<td>"+currentUser.name+"</td><td>"+currentUser.email+"</td>";
    });
    usersDiv.append(table);
}