var array = ourarray = [50, 60, 70];

var outdata = ourarray[0];

var myArray = [50, 60, 70];

myArray[0] = 6;

console.log(myArray)

//--------------------------------------------//

/*  add data to array --> push
 */

myArray.push(["dog", 3]);

console.log(myArray)

// pop ---> remove last element


var removedFromMyArray = myArray.pop();

console.log(removedFromMyArray)

// shift() ---> remove first element

var removedFromArr = myArray.shift();

console.log(removedFromArr)

// unshift() ---> add to beginning

myArray.unshift(7);

console.log(myArray)


