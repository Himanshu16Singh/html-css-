function Hero(name , side){ //a constructor function
    this.name = name;
    this.side = side;

/*    this.describeYourself = function(){
        console.log("I'm " +this.name + " and I'm form the " +this.side);
    }*/
    this.speak = function(){
        return "<p>I'm " +this.name + " and I'm form the " +this.side+".</p>";
    }
}

var ianSolo = new Hero("Ian Solo"  , "Rebels"); //Object
var lukeSkywalker = new Hero("Luke Skywalker"  , "Rebels");
var darkVador = new Hero("Dark Vador"  , "Empire");

function makeHeroesSpeak() {
    document.body.innerHTML += darkVador.speak();
    document.body.innerHTML += lukeSkywalker.speak();
    document.body.innerHTML += ianSolo.speak();
}

/*IN CONSOLE
darkVador
Object {
    name: "Dark Vador",
    side: "Empire"
}

ianSolo
Object{
    describeYourself: function(..)
    name: "Ian Solo",
    side: "Rebels"
}

ianSolo.describeYourself();
"I'm Ian Solo and I'm from the Rebels"
*/