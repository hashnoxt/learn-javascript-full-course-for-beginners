//allows create function that takes no of args
const sum = (function() {
    return function sum(...args){ //sum(x,y,z)
      //  const args = [x,y,z];
        return args.reduce((a,b) => a + b, 0); //summing them
    }
})();

console.log(sum(1,2,3,4));

