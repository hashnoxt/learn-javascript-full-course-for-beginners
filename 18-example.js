var arr = [];
for (var i = 0; i < 5; i++){
    arr.push(i)
}

console.log(arr);

var arr2 = [];

for (var x = 0; x  < 10 ; x += 2){
    arr2.push(x);
}

console.log(arr2)

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]])

console.log(product)
