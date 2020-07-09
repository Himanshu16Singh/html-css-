//name, side are called "instance properties"
//speak is called an "instance method"
//they are used preceeding them by the name of the instance object
//Ex: luke.speak(), luke.name etc.
class Hero{
    //must be UNIQUE!, called when "new" is used
    constructor(name, side){
        this.name = name;
        this.side = side;
        Hero.numberHeroesCreated++;
    }

    //no "function" keyword here!
    speak() {
        return "<p>My name is "+this.name +", I'm with the "+this.side + ".</p>";
    }
}
//This cannot be declared before the class as unlike functions
//classes must be declared before being used.
Hero.numberHeroesCreated = 0;

var dardVador = new Hero("Dark Vador","empire");
var luke = new Hero("Luke Skywalker","rebels");
//var ianSolo = new Hero("Ian Solo","rebels");

class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        //static property
        Point.nbPointsCreated++;
    }

    //static method
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}
//static property
Point.nbPointsCreated = 0;

//we create 3 points
const p1 = new Point(5,5);
const p2 = new Point(10,10);
const p3 = new Point(12,27);

document.body.innerHTML += "<p>Distance between points (5,5) and (10,10) is "+
                            Point.distance(p1, p2) + "</p>";
document.body.innerHTML += "Number of Points created is "+ Point.nbPointsCreated;


//IN CONSOLE
Hero.numberHeroesCreated  = 0;
0

Hero.numberHeroesCreated
0

Hero.numberHeroesCreated
2       //after object made

