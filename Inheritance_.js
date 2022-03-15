/*
Prototyple Inheritance 

*/

let object = {
    name:"Wasim",
    city:"Bangalore",

    getIntro :function(){
        console.log(this.name+"  from "+this.city);
    }
}

object.getIntro();
object.prototype;
console.log(object.__proto__);

let object2 ={
    name:"Salma Blair"
}

// never do this
object2.__proto__=object;

console.log(object2.city);

const dude ={};

dude.name="Chris Evans";
dude.age=33;
console.log("dude.talk : is property does not exist : "+dude.talk); //undefined
dude.walk; // undefined

console.log("toString() : "+dude.toString());

const human ={
    kind:"human"
}

const sima = Object.create(human);
console.log("SIMA is inherit property from human  : "+sima.kind)

sima.age = 23;
console.log("setting sima proerty   : "+sima.age);

const ben = Object.create(sima);

console.log("Now ben's prototype is sima and human so , it will inherits from   : "+sima.kind)


//  
class Human{
    talk(){
        return "Talking";
    }
}

class SuperHuman extends Human{

    fly(){
        return "I can FLY";
    }
}
var f1 = new SuperHuman();
console.log(f1.talk());

function Mama(love){
    this.love= love;
}

const me = new Mama("Very Much");

console.log("it will be : "+me.prototype);

// prototype is property of constructor

console.log(me.__proto__ === Mama.prototype);

Mama.prototype.Money = function(){
    return "Mama give me Money";
}

console.log(me.Money);

// __proto__ is property of every variable thats pointing  to the parent Object that is inheriting from

// prototype is property on the constructor function that contains all the property that will inherited by it's instances

/*
JavaScript extends Example: a Prototype-based approach
Here, we perform prototype-based inheritance. In this approach, there is no need to use class and extends keywords.
*/

// constructor function
function Bike(company){
    this.company = company;
}

Bike.prototype.getCompany = function(){
    return this.company;
}

// another constructor function

function Vehical(name , price){
    this.name = name ;
    this.price = price;
}

var bike = new Bike("Bajaj");

Vehical.prototype = bike; // Now Bike treats as a parents of Vehical

var v1 = new Vehical("Pulsar",110000);
console.log("company Name :   "+v1.getCompany()+"  , bike Name :  "+v1.name+"   ,  price  :"+v1.price);