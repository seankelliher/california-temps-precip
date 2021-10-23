import {yearsResult} from "./fetches.js";

//Extract needed arrays from the NOAA data you fetched in fetch.js.
const results0 = yearsResult[0].results;
const results1 = yearsResult[1].results;
const results2 = yearsResult[2].results;
const results3 = yearsResult[3].results;
const results4 = yearsResult[4].results;
const results5 = yearsResult[5].results;

//Combine them into one array.
const resultsAll = [
    ...results0,
    ...results1,
    ...results2,
    ...results3,
    ...results4,
    ...results5
];

//Placeholders for days over 90 degrees F arrays.
const sanDiegoTemp = [];
const losAngelesTemp = [];
const bakersfieldTemp = [];
const fresnoTemp = [];
const stocktonTemp = [];
const eurekaTemp = [];

//Placeholders for annual precipitation arrays.
const sanDiegoPrcp = [];
const losAngelesPrcp = [];
const bakersfieldPrcp = [];
const fresnoPrcp = [];
const stocktonPrcp = [];
const eurekaPrcp = [];

//"Helper" function for the For Each function below.
//Accepts date of object being evaluated. Ex., 1973-01-01T00:00:00.
//Extracts the year. Ex., 1973.
//Subtracts 1970 to determine position for value in array for results.
//For example, in the sanDiegoTemp array, the value for 1973 goes in position 3.
function findPosition (x) {
    return x.substring(0, 4) - 1970;
}

//For Each function, loops through "raw data." Divides it into arrays.
resultsAll.forEach(function (index) {
    if (index.datatype === "DX90") {
        if (index.station === "GHCND:USW00023188") {
            sanDiegoTemp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00023174") {
            losAngelesTemp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00023155") {
            bakersfieldTemp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00093193") {
            fresnoTemp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00023237") {
            stocktonTemp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00024213") {
            eurekaTemp[findPosition(index.date)] = index.value;
        }
    } else if (index.datatype === "PRCP") {
        if (index.station === "GHCND:USW00023188") {
            sanDiegoPrcp[findPosition(index.date)] = index.value; 
        } else if (index.station === "GHCND:USW00023174") {
            losAngelesPrcp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00023155") {
            bakersfieldPrcp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00093193") {
            fresnoPrcp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00023237") {
            stocktonPrcp[findPosition(index.date)] = index.value;
        } else if (index.station === "GHCND:USW00024213") {
            eurekaPrcp[findPosition(index.date)] = index.value;
        } 
    }

//San Diego - GHCND:USW00023188
//Los Angeles - GHCND:USW00023174
//Bakersfield - GHCND:USW00023155
//Fresno - GHCND:USW00093193
//Stockton - GHCND:USW00023237
//Eureka - GHCND:USW00024213

export {
    sanDiegoTemp,
    losAngelesTemp,
    bakersfieldTemp,
    fresnoTemp,
    stocktonTemp,
    eurekaTemp,
    sanDiegoPrcp,
    losAngelesPrcp,
    bakersfieldPrcp,
    fresnoPrcp,
    stocktonPrcp,
    eurekaPrcp
};