//ES6 get and set
class Person {
    constructor(givenName, familyName){
        this.givenName = givenName; //"normal name"
        this._familyName = familyName; //start with "_"
    }

    //getters and setters are useful for processing
    //properties, doing checks, changing them before
    //returning their value, etc.
    //having "get familyName" is equivalent to declaring a property
    //named "familyName", but in this case we have to use ANOTHER
    //name for the variable that will be used to store the property
    //value. A convention is to keep the same name but add an
    //underscore at the beginning.
    //Ex: get name(n){ this._name = n;}

    get familyName() {
        return this._familyName.toUpperCase();
    }

    set familyName(newName){
        //validation could be checked here such as
        //only allowing non numerical values
        this._familyName = newName;
    }

    walk() {
        return (this.givenName + ' '+ this._familyName + ' is walking.');
    }
}

let himanshu = new Person('Himanshu','Singh');

window.onload = function() {
document.body.innerHTML += "<p>"+himanshu.walk() + "</p>";
//Notice that we use here the "normal" names givenName and familyName
document.body.innerHTML += "<p>A student "+himanshu.givenName+' '+himanshu.familyName + "</p>";
};