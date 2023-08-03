let person ={
    name:"Ingrid Medina",
    hobbies:["doing nails","playing games"],
    favorite_food: "tacos",
    favorite_animal:"tiger",
    age:"17",
    is_mom: false,
    hello() {
        console.log(`My name is ${person.name}  and some of my hobbies  are ${person.hobbies}. My favorite food is ${person.favorite_food} and my favorite animal is a ${person.favorite_animal}. I am ${person.age} years old.`)
    }
}

person.hello()

console.log(person.name)
console.log(person.hobbies)
console.log(person.favorite_food)
console.log(person.favorite_animal)

const READLINE = require("readline-sync");
let backPack ={
    backpack:[],
    color: "blue",
    pockets: 3,
    zippers: 3,
    size:"medium",
    open(){
        console.log(this.backpack) 
    },
    close(){
        console.log("Your stuff is safe")
    },
    carry(){
        console.log("It will  carry your school materials.")
    },
    putIn(){
        let item =READLINE.question("What would you like to add? >>")
        this.backpack.push(item)
        console.log(this.backpack)
    },
}

backPack.putIn()