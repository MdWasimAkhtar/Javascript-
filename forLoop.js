for(let i = 0 ; i<5 ; i++){
    console.log(i)
}
// for(;;) infinite loop

for(let i = 0 ; i<5;){
    console.log(i)
    i++;
}

let string = ""
for( let i = 1 ; i <= 5 ; i++){
    for(let j = 1 ; j <=5 ; j++){
        string +=" * "
    }
    string += "\n"
}
console.log(string)

let num = 12321
let rem = 0  ;
let rev = ""
let temp = num

while(temp > 0 ){
    rem = temp % 10 
    console.log(rem)
    rev = rev + rem
    temp =parseInt( temp / 10)
}
console.log(`reversed number is = ${rev}   and Origional number is = ${num}`)
if(rev == num)
console.log("its Number Palindrome")