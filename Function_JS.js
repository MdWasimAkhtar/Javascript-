function greet(y){
    console.log("Hello World ")
    let x = 10
    return x + y 
}
console.log(greet(30)+50)
function greeting(){
    console.log("define inside a function")
}

x = greeting()+99 , greet(40)+30
console.log(x)          // NaN

x2 = greeting()+99 , greet(40)+1999

console.log(typeof greet(23))

let add = function(num1 , n2){
    return num1 + n2
}
let sum = add(30,30)
console.log(sum)

// --------------------Global variable----------------------------
//default argument also supported in javascript

let global_var = 500

function bonuc(trav , extra_work=1000){
    let sal = 5000;
    res = sal+global_var+extra_work+trav
    return res
}

console.log(bonuc(3000))


// ---------------------Arrow Function-------------------------------

let userName = (user) =>{
    console.log(` UserName : ${user}`)
}
userName("Wasim")

let add2 = (n1 , n2 )  => n1+n2+100
let result2 = add2(100,20)
console.log(result2)

//--------------------------------Method--------------------------

let laptop = {
    cpu:"b3",
    ram :'16GB',
    brand:"Apple",

    greet2: function(){
        console.log('Hello World Ramya Dasalanka');
    }
}

laptop.greet2();

let laptop2 = {
    cpu:"d9",
    ram :'16GB',
    brand:"Apple",

    compare : function(other){
        if(this.cpu > other.cpu){
            console.log(this);
        }
        else{
            console.log(other);
        }
    },

    getConfig: function(){
        let storage = "1000GB"
        console.log(storage);
        console.log(laptop.cpu); //it's laptop Object cpu         //ReferenceError: cpu is not defined

        console.log(laptop2.cpu);
        console.log(this.cpu);
    }
}

laptop2.getConfig();

if(laptop.cpu < laptop2.cpu){
    console.log(` ${laptop.cpu}  is faster `)
}
else{
console.log(`${laptop2.cpu} is Faster `)
}


laptop2.compare(laptop)