/********************************************************************
 *                                                                  
 *  Team Edge Array Mini-project: THE SHOPPING LIST HELPER
 * 
 *  This project prompts users using readline_sync to prompt users
 *  to add (or remove) items from a shopping list. It starts empty
 *  and each time the program is run it asks you to either add or 
 *  remove an item from the list. It also updates the user of its
 *  contents. The shopping list also checks to see if an item 
 *  is already present in the array and prevents you from adding it
 *  again, giving feedback along the way. 
 * 
 * ***************************************************************/

const READLINE = require("readline-sync");

let active = true

console.log("Welcome to: ")

console.log(`
 __..                    .        ,   
(__ |_  _ ._ ._ *._  _   |   * __-+-  
.__)[ )(_)[_)[_)|[ )(_]  |___|_)  |   
          |  |      ._|               

`)

let welcomeMessage = `Hi! I'm your shopping assistant. Let me take your order. \n
You can type 'add milk' to add milk to your shopping list. \n 
or you can type 'remove milk' to remove it. \n`

console.log(welcomeMessage)


//-->Todo: declare a shoppingList array


while(active){

    checkAnswer(promptUser()) //this makes the program continously prompt and check response while the boolean 'active' returns true

}

function promptUser(){

    let  reply = READLINE.question("What do you want to add or remove?  >>  ")

    return reply

}
[]
["9","k"]

let s = "asddff"
s[2]


function checkAnswer(reply){             
    const replywords = reply.split(" "); "add", "milk"
    let item = replywords[1];
    let command = replywords[0]

if (command == add ) {
    addItem(replywords);
        console.log(item)
}

if (promptUser()=="remove")  {
    removeItem();
}

}

function addItem(item){
//this function can take in a string and store it in an array
console.log()
}

function removeItem(){


}

console.log(list)