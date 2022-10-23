var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z; // old way of assigning variables in object

const {x : a, y : b, z : c} = voxel;

const  AVG_TEMPRATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfmrw(avgTempratures){
    "use strict";

    const{ tomorrow: tempOfTomorrow} = avgTempratures;
    return tempOfTomorrow;
}

console.log(getTempOfmrw(AVG_TEMPRATURES))

//destructing with nested objects

