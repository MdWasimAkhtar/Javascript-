console.log("Hello World")

//-------------- Variable ----------------------------
/*
1). Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
2). After first letter we can use digits (0 to 9), for example value1.
3). JavaScript variables are case sensitive, for example x and X are different variables.
*/ 

num = 33
num2 = 44
console.log(num+num2)

// new Feature [ 'let' declaring the variable  ]
// error Identifier num is already define

let num3 = 99

let user = "Sahithi"
console.log(user)

//SyntaxError: Identifier 'user' has already been declared
let user2 = "NintyNine Brokly"
console.log(user2)

//document.write(user) , document is not define

//-------------------CONST------------------------------------
//These are constant values and cannot be changed. with const keyword

let radius = 10
const pi = 3.14

//pi = 78 TypeError: Assignment to constant variable. we can't change const variable

area = pi*radius*radius
console.log("Area is = "+area)

let $_price = 99.99
console.log($_price)

//-----------------------------Data Type--------------------------------------------------
/*
JavaScript is a dynamic type language, means you don't need to specify type of the variable
 because it is dynamically used by JavaScript engine. You need to use var here to specify the
  data type.
 It can hold any type of values such as numbers, strings etc

1).primitive 
String	represents sequence of characters e.g. "hello"
Number	represents numeric values e.g. 100
Boolean	represents boolean value either false or true
Undefined	represents undefined value
Null	represents null i.e. no value at all

2). non primitive
Object	represents instance through which we can access members
Array	represents group of similar values
RegExp	represents regular expression

*/

let num4 = 34.9
let num5 = 90
console.log(num4+num5)

//HexaDecimal number

let num6 = 0Xff
let num7 = 1.5e12   

let inf  = 12/0
console.log(inf)

console.log(Number.MAX_VALUE *1)

console.log(Number.MAX_VALUE *10)

console.log(Number.MAX_VALUE +100000000000000)

let xman="Mangeto"
console.log(num3+" "+xman+90+10)

//-------------------Type conversion-------------------------

let num9 = String(99)

console.log(num9,typeof num9)

let str2=String('888888wasim')
console.log(str2,typeof str2)

let x 
console.log(x,typeof x)

x= 1000
console.log(x,typeof x)

x = x+""
console.log(x,typeof x)

x = x -3
console.log(x,typeof x)

x = !x
console.log(x,typeof x)

console.log(Boolean(7))
console.log(Boolean(-9000))
console.log(Boolean(0))
console.log(null)
console.log(Boolean(null))

    console.log(Boolean(undefined))
    console.log(Boolean())
    console.log(Boolean("SSSS"))


let x2 = "123 Navin"
console.log(x2)

let x3 = parseInt("123 Navin")
console.log(x3)

let x4 = parseFloat("123 Navin")
console.log(x4)

