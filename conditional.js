let num1 = 1000
let num2 = 2000
let num3 = 3000
let result = num1 > num2 && num1>num3

if(result){
    console.log("num1 is greater number")
   // num2 = num2+num1
    console.log(num2)
}
else if(num2 > num1 && num2 > num3){
    console.log("num2 is greater")
}
else
    console.log("Num3 is greater Number")


if(num1 % 2 === 0 && num1  % 5 == 0 )
console.log("Even Number")
else
console.log("Odd Number")

result = num1 % 2 ===0 ? "Even" : "ODD"
console.log(result)