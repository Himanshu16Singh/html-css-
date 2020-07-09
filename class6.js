/*
    ES6 created keyword and a constructor keyword, along with advanced concepts that
    will be the subject of an "advanced JavaScript" course.

    Using ES6 classes
*/
class Hero{
    //must be UNIQUE, called when "new" is used
    constructor(name, side){
        this.name = name;
        this.side = side;
    }

    // no "functions" keyword here!
    speak() {
        // this.anotherMethod();
        return "<p>My name is " +this.name + ", I'm with the "+this.side+ ".</p>";
    }

    // anotherMethod(){}
}

var darkVador = new Hero("Dark Vador","empire");
var luke = new Hero("Luke Skywalker","rebels");
var ianSolo = new Hero("Ian Solo"  , "rebels");

//darkVador.speak() ;