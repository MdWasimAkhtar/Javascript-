let values =[1,2,3,4,5,6,7,8,9,10]

console.log(values)
console.log(values.length)


for(let i=100 ; i<=110 ; i++){
    values.push(i)
}
for( i in values){
    console.log(values[i])
}
console.log(values)

let vowel = ['a','e','i','o','u']

let str = "Wasim is writing code in Js"

for (i in str){
    if( i in vowel)
        console.log(str[i])
}

let names =['Sahithi','Wasim',"Ramya"]

names[3]="Windy"

console.log(names)

let data = ["Wasim AKhtar",23.4,{tech:'JS'},function(){console.log('JS is Awesom')}]

console.log(data)
data[3]()

let data2 = ["33",'seven',44,'parsexxx()',55]

console.log(data2.pop())  //  removes the last element

console.log(data2.shift()) // shift is removes from first index 

console.log(data2.unshift()) //

console.log(data2.splice(1,1))  // removes from (index , how many no delete, add elemet....)

let arr = ['wasim',66.7,'d',22,44,66,11]

for (let n of arr ){
    console.log(n)
}

//console.log(n)    ReferenceError: n is not defined

//-----------------------------Array DeStructuring ------------------

let [a,b,c,d,e,f,g] = arr;
console.log(a)

let a1 = 5 ;
let b1 = 6 ;
console.log(`a1 and b1 before swaping `);
console.log(`a1 = ${a1}, b1 = ${b1}`);

[a1,b1]  = [b1,a1]

console.log(`a1 = ${a1}, b1 = ${b1}`)

let word = "My Name is Wasim Akhtar ".split(" ")
console.log(word)

arr.forEach((n) => {

    console.log(n)
});

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,111,1111,222,11222,333322220000,4455554]

console.log(arr2.filter( n => n%2 == 0 ))

arr2.filter(m => m%2 == 0 )
.map( l => l*2)
.forEach(n => {

        console.log(n)
});

let res = arr2.filter(m => m%2 == 0 )
.map( l => l*2)
.reduce((n,k) => n+k);

console.log(res )