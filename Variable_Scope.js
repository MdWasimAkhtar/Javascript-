/*
Hoisting
While variables declared with var keyword are hoisted
 (initialized with undefined before the code is run) which means they are
 accessible in their enclosing scope even before they are declared:
*/

function run(){
    console.log(foo);  // undefined
    var foo = "FOO";
    console.log(foo);
}
run();

/*
let variables are not initialized until their definition is evaluated.
 Accessing them before the initialization results in a ReferenceError. 
 The variable is said to be in "temporal dead zone" from the start of
  the block until the initialization is processed.
*/

function checkHoisting(){
//    console.log(foo);  ReferenceError: Cannot access 'foo' before initialization
    let foo ="FOO";
    console.log(foo);
}
checkHoisting();

// 2. creating Global scope variable

var x1 = 200; // global scoped
let xx = 300;  // not allowed to be global scope

var foo = "Foo";  // globally scoped
let bar = "Bar"; // not allowed to be globally scoped
/*
ReferenceError: window is not defined

window object is present only in the context of browser.
 When running application on nodejs no window object is available.
  If you want to share your variables or functions across multiple 
  files then you have to use require and exports
*/
window ={}
console.log(window.foo); // Foo
console.log(window.bar)

// Redeclaration 
/*
In strict mode, var will let you re-declare the same variable in 
the same scope while let raises a SyntaxError.
*/

var woman1 = "Blond";
let laptop = "16gb Ram";

var woman1 = "Red_headed";

// let laptop = 23;  SyntaxError: Identifier 'laptop' has already been declared
/*
he main difference between let and var is that scope of a variable defined with 
let is limited to the block in which it is declared while variable declared with
 var has the global scope. So we can say that var is rather a keyword which defines
  a variable globally regardless of block scope.

The scope of let not only limited to the block in which it is defined but variable
 with let also do not get added with global window object even if it get declared 
 outside of any block. But we can access variable with var from window object if it
  is defined globally.

Due to limited scope let variables are usually used when there is limited use of
 those variables such as in for loops, while loops or inside the scope of if conditions
  etc while var variable is used when value of variable need to be less change and used to
   accessed globally.

Also, one difference between var and let is variable with var can be redeclared
 to some other value while variable could not be redeclared if it is defined with let.
*/