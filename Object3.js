// vocabulary:

/*
    For arrays, we speak of elements
    For objects, we talk about properties
    But a property can also be a function, in which case it is called a method
    Yes, it is possible for an object's property to be a function!

    A very simple example:
*/
var medor = {
    name: 'Benji',
    bark: function(){
        alert('Ouarf, Ouarf!');
    }
} ;

//In this example, the bark property's value is a function , so we call bark "a method".
//medor.name
//medor.bark();

let darkVador = {
    race: 'human',
    job: 'villain',
    talk: function() {
        this.describeYourself();
        return 'come to the dark side, Luke!';
    },
    describeYourself: function(){
        console.log("Hello I'm describeYourself!!!");
        return "I'm a "+ this.race+ " and I'm a "+ this.job + " in a series of movies!";
    }
}

//empty object with properties/methods
var dardVador = {};

// add properties after darkVador has been created
darkVador.race = 'human';
darkVador.job = 'villain';

//add some methods
darkVador.talk = function() {
    return 'come to the dark side, Luke!' + this.breathe();
}

darkVador.describeYourself = function() {
    return "I'm a " + this.race+ " and I'm a " + this.job + " in a series of movies!" + this.breathe();
}

darkVador.breathe = function() {
    return ".............shhhhhhhhhhhhhhhhhhhhh.....";
}

//IN CONSOLE
medor
Object {
    bark: function(){..},
    name: "Benjji"
}

medor.bark()
// alert message 

darkVador
Object {
    describeYourself: function(){},
    job: "villain",
    race: "human",
    talk: function() {}
}

darkVador.describeYourself();
"I'm a human and I'm a villain in a series of movies!"

darkVador.talk();
"hello I'm describeYourself!!!"
"come to the dark side, Luke!"

darkVador
Object{
breathe: function() {..},
describeYourself: function() {..},
job: "villain",
race: "human",
talk: function() {..}
}