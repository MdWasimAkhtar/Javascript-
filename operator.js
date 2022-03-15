let num1 = 44
num2  = 90

res = num1+num2
console.log(res)


let t1 = true
let t2 = false

let result = t1 + t2 
console.log(result)

num = num1+20
num += 10

// increment operator  num++

num++
num--

//preincrement
++num

// -----------------Logical Operator----------------------------------

let data = 100 <= 34
console.log(data)

let str3 = "pen"
let str4 = "Book"

console.log(str3>str4) // true , comparing each character


let a = parseInt('a')
console.log(a) // Nan

let x = "33"
let y = 130
console.log(x>y)

let xx = 33

y = x == xx // == only checks Data(content) not type
console.log(y) // true

y2 = x === xx  // it's checks data(content) and type
console.log(y2)

let x3 = 7 , y3 = 8 , z3 = 10

let result0 =   x3>y3 | x3>z3
console.log(result0)   // 0

let result2 =   x3<y3 || x3>z3
console.log(result2)            // true

let result3 =   x3>y3 && x3<z3
console.log(result3)    // false

let n = !result3
console.log(n)    // true , bcz result3 is false


