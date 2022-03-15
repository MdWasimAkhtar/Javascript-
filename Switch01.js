let day = "Wednesday"

switch(day){
    case  "Monday":
    console.log("Wake Up time for Monday is 5:15 am ")
    break;
    case  "Tuesday":
    console.log("Wake Up time for Tuesday is 5:35 am ")
    break;
    case  "Wednesday":
    console.log("Wake Up time for Wednesday is 5:05 am ")
    break;
    case  "Thrusday":
    console.log("Wake Up time for Thrusday is 6:00 am ")
    break;

    default:
        console.log("I Think it's Sleepy Day ")
}

// Template literal in javascript

let num1 = 99

let num2 = 100

result  = num1 + num2
console.log("The addition of "+num1 +" and "+num2+" is = "+result)
console.log(`The addition of ${num1} and ${num2} is = ${result}`)