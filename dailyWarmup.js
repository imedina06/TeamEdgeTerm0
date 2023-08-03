// let mySchedule = ["Math","History","Biology","Art","English","Music"];

// let newClass = READLINE.question("What class would you like to add to your schedule?:")
// if(mySchedule.length < 7 &&  mySchedule.includes(newClass) == false){
//     console.log("Class Added")
// }
// else {
//     console.log{
//         console.log("Class not added")
//     }
// }

//07/20
class Person{
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name}  ! `);
    }

    farewell(yourName){
        console.log(`Goodbye ${yourName}, it was nice to meet you.`)
    }
}

const student1 =  new Person("Ingrid");
const student2 = new Person("Osiel");

student1.introduce();
student2.introducee();
