let alien = {
    name :'Wasim',
    emp_id : "accenture121",
    technology :"Java/Python/SQL",
    "work exp" : "fresher"
}
console.log(typeof alien)
console.log(alien)

console.log(`He like's coding in :  ${alien.technology}`)

console.log(`His EMP ID is : ${alien['emp_id']}`)
console.log(alien['work exp'])

// Object inside an Other Objects
let alien2 = {
    name :'Wasim',
    emp_id : "accenture121",
    technology :"Java/Python/SQL",
    "work exp" : "fresher",
    laptop :{
        cpu :'i8',
        ram : "32gb",
        brand :"Apple"
    }
}

console.log("length of brand : "+alien2.laptop.brand?.length)
console.log("length of brand : "+alien2.laptop.brandof?.length) // undefined

// delete element inside Object

delete alien2.laptop.cpu

console.log(alien2)

for(let i in alien2){
    console.log(i+"  : "+alien2[i])
}