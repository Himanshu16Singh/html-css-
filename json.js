//IN CONSOLE
JSON.stringify(obj) //js obj in json
JSON.parse(jsonString)  //gives js obj

var anArray = ['Monday','Tuesday','Wednesday'];
undefined

var jsonFormat = JSON.stringify(anArray);
undefined

jsonFormat
"["Monday","Tuesday","Wednesday"]"

var complexObject= { name: 'Metallica',
    albums: [
        {name:"Master of Puppets",year:1986},
        {name:"Black Album",year:1991}
    ]
};
undefined

var jsonFormat = JSON.stringify(complexObject);
undefined

jsonFormat
"{ "name":"Metallica","albums":[{"name":"Master of Puppets","year":1986},{"name":"Black Album","year":1991}]}"

jsonFormat.name //not a js obj
undefined

var obj = JSON.parse(jsonFormat);
undefined

obj
Object{
    album: [Object{name: "Master of Puppets",year:1986},
            Object{name: "Black Album",year:1991}],
    name: "Metallica"
}

obj.name
"Metallica"