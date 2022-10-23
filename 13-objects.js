var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);

testObj.value = 5;

console.log(testObj)

//delete properdy

delete testObj.value;

console.log(testObj)