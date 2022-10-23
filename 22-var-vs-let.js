//let won't let you declare variables twice

let catName = "Quincy";
let quote;

//let catName = "Beau";

function catTalk(){
    "use strict"; // enable strict mode -> stop mistakes

    catName = "Oliver";
    quote = catName + " says Meow!";
}

catTalk();

