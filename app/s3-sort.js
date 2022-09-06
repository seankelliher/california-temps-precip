import {extractResults} from "./s2-extract.js";

//"Helper" function.
//Accepts timestamp of object being evaluated. Ex., 1973-01-01T00:00:00.
//Extracts the year. Ex., 1973.
//Subtracts 1970 to determine where value should go in array of results.
//For example, in the sdTemp array, the value for 1973 goes in position 3.
function findPosition(tStamp) {
    return tStamp.substring(0, 4) - 1970;
}

async function sortResults() {

    const {results} = await extractResults();

    //Placeholders - annual temp (DX90) arrays.
    const sdTemp = new Array(50);
    const laTemp = new Array(50);
    const bfieldTemp = new Array(50);
    const fresnoTemp = new Array(50);
    const stktonTemp = new Array(50);
    const eurekaTemp = new Array(50);

    //Placeholders - annual prcp (PRCP) arrays.
    const sdPrcp = new Array(50);
    const laPrcp = new Array(50);
    const bfieldPrcp = new Array(50);
    const fresnoPrcp = new Array(50);
    const stktonPrcp = new Array(50);
    const eurekaPrcp = new Array(50);

    //For Each function, loops through "raw data." Divides it into arrays.
    results.forEach(function (index) {
        if (index.datatype === "DX90") {
            if (index.station === "GHCND:USW00023188") {
                sdTemp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00023174") {
                laTemp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00023155") {
                bfieldTemp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00093193") {
                fresnoTemp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00023237") {
                stktonTemp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00024213") {
                eurekaTemp[findPosition(index.date)] = index.value;
            }
        } else if (index.datatype === "PRCP") {
            if (index.station === "GHCND:USW00023188") {
                sdPrcp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00023174") {
                laPrcp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00023155") {
                bfieldPrcp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00093193") {
                fresnoPrcp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00023237") {
                stktonPrcp[findPosition(index.date)] = index.value;
            } else if (index.station === "GHCND:USW00024213") {
                eurekaPrcp[findPosition(index.date)] = index.value;
            }
        }
    });
    return {
        bfieldPrcp,
        bfieldTemp,
        eurekaPrcp,
        eurekaTemp,
        fresnoPrcp,
        fresnoTemp,
        laPrcp,
        laTemp,
        sdPrcp,
        sdTemp,
        stktonPrcp,
        stktonTemp,
    };
}

export {sortResults};