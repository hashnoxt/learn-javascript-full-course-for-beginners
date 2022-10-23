const  AVG_FORCAST = {
    today: {min: 72, max: 93},
    tomorrow: {min: 73.3, max: 84.6 }
};

function getTempOfmrw(forecast){
    "use strict";

    const{ tomorrow: {max: maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}

console.log(getTempOfmrw(AVG_FORCAST))

