function ourReusableFunction() {
    console.log("Hello, World");
}

ourReusableFunction();

function reusableFunction()
 {
     console.log("Hi")
}

function ourAdd(a, b) {
    console.log(a - b);
}

ourAdd(4, 5);
//

function functionWithArgs(c,d){
    console.log(c * d);
}


functionWithArgs(39 , 465);

//  ------------------------------------------------------  //

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

var outerWear = "T-Shirt";

function myOutfit() {

    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());

// ------------------------------------------------------  //

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10))

//  --------------------------------------------------  //

// return to variable

var change = 0;

function myfunc(num) {
    for (let x = 0; x < 10; x++) {
        num += x;
    }
    return num;
}

change = myfunc(10);

console.log(change)