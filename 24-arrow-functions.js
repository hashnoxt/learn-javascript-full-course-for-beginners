var magic = () => {
    return new Date();
};

//var magic = () => new Date(); short form

//pass args

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]))

//higher order arrow functions

const realNumberArray = [4,5,6,3,5,3,5,-3.4,6,8.34];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

