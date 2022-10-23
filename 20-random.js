function random(){
    return Math.floor(Math.random()*20); //convert to int --> floor
}

console.log(random())

// convert integer

function convertToInteger(str){
    return parseInt(str);
}

console.log(convertToInteger("45"))

// Radix

function convertToInt(str){
    return parseInt(str, 2)
}

console.log(convertToInt("10011"))

