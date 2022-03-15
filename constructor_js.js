function Alien(name , tech){
    this.name = name ;
    this.tech = tech;
    console.log(`${this.name} and she is learning ${this.tech}  `)

    //common method

    this.work = function(){
        console.log('Solving bugs from 12 hr')
    }
    return ""; // No Effects 
}

let alien1 =new  Alien('Sahithi','JS')

let alien2 = new Alien("Wasima","Python")

//new keyword -- adv , if we make changes in One Object it will not reflect in Other Objects

alien1.tech = "Blockchain";
console.log(alien1)
alien1.work()
console.log(typeof Alien)

