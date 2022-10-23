function welcomeToBooleans() {
    return true;
}

// if-else

function ourTrueOrFalse(isTrue) {
    if (isItTrue) {
        return "Yes, it's ture";
    }
    return "No, it's flase";
}

function trueOrFalse(wasThatTrue) {
    if (!(wasThatTrue)) {
        return "Yes, that was ture";
    }
    return "No, that was false";
}

console.log(trueOrFalse(false));

//  check equal

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not equal"
}

console.log(testEqual(12));

//  === --> checks equality without type conversion  :  == --> checks with type conversion

function testLessThanOrEqual(val) {
    if (val >= 12 && val < 27) {
        return "Smaller than val"
    }
    return "Greater than val"
}

console.log(testLessThanOrEqual(25))

// --> if-else

function testIfElse(val) {
    if (val < 10) {
        return "Less than 5"
    }
    else if (val < 15) {
        return "Less than 15"
    }
    else{
        return "Greater than or equal to 15";
    }
}

console.log(testIfElse(15));

