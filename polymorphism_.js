/*
The polymorphism is a core concept of an object-oriented paradigm that
 provides a way to perform a single action in different forms. It provides
  an ability to call the same method on different JavaScript objects. As
   JavaScript is not a type-safe language, we can pass any type of data members with the methods
*/

class P{

    care(){
        return "Parent care its children "
    }
}

class Child extends P{

    // if this care method does not exist then parent method will execute
    care(){
        return "child take properties from their parents"
    }
}

var a = new P();
const c1 = new Child();
console.log(c1.care());














function A (){

}
A.prototype.display = function(){
    return "A is invoked"
}

function B(){

}
B.prototype = Object.create(A.prototype);

var a = [new A() , new B()]

a.forEach(function(msg){
    console.log(msg.display())
});