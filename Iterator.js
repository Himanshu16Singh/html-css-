let a = ['Monday','Tuesday','Wednesday'];
let persons = [
    {name:'Himanshu',age:20},
    {name:'Jitendra',age:21},
    {name:'Fun',age:1000}
];

window.onload = function(){
/* a.forEach(function(day){
    // a.forEach(function(day,index){
    a.forEach(function(day,index , arr){
    //day will be the current day
    // arr is for array itself
    document.body.innerHTML  += day+" is at index: "+index+" from an array of "+arr.length+" elements!<br>";
})
*/

/*
    for(let i = 0; i<a.length; i++){
        document.body.innerHTML += a[i]+"<br>";
    }
*/

    persons.forEach(function(p,index){
        document.body.innerHTML += p.name + ", age "+p.age+" index "+index+" in the array<br>";
});
};