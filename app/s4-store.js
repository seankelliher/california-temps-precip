import {sortResults} from "./s3-sort.js";

async function setGetLocalStorage() {

    //Check local storage for data. If yes, use it. If no, fetch it from NOAA.
    const LocalCheck = JSON.parse(localStorage.getItem("sdTempLocal"));

    if (LocalCheck === null) {
        const {
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
            stktonTemp
        } = await sortResults();

        //Put items in local storage - Temps.
        localStorage.setItem("sdTempLocal", JSON.stringify(sdTemp));
        localStorage.setItem("laTempLocal", JSON.stringify(laTemp));
        localStorage.setItem("bfieldTempLocal", JSON.stringify(bfieldTemp));
        localStorage.setItem("fresnoTempLocal", JSON.stringify(fresnoTemp));
        localStorage.setItem("stktonTempLocal", JSON.stringify(stktonTemp));
        localStorage.setItem("eurekaTempLocal", JSON.stringify(eurekaTemp));

        //Put items in local storage - Prcp.
        localStorage.setItem("sdPrcpLocal", JSON.stringify(sdPrcp));
        localStorage.setItem("laPrcpLocal", JSON.stringify(laPrcp));
        localStorage.setItem("bfieldPrcpLocal", JSON.stringify(bfieldPrcp));
        localStorage.setItem("fresnoPrcpLocal", JSON.stringify(fresnoPrcp));
        localStorage.setItem("stktonPrcpLocal", JSON.stringify(stktonPrcp));
        localStorage.setItem("eurekaPrcpLocal", JSON.stringify(eurekaPrcp));
    }

    //Get items from local storage - Temps.
    const sdTempLoc = JSON.parse(localStorage.getItem("sdTempLocal"));
    const laTempLoc = JSON.parse(localStorage.getItem("laTempLocal"));
    const bfieldTempLoc = JSON.parse(localStorage.getItem("bfieldTempLocal"));
    const fresnoTempLoc = JSON.parse(localStorage.getItem("fresnoTempLocal"));
    const stktonTempLoc = JSON.parse(localStorage.getItem("stktonTempLocal"));
    const eurekaTempLoc = JSON.parse(localStorage.getItem("eurekaTempLocal"));

    //Get items from local storage - Prcp.
    const sdPrcpLoc = JSON.parse(localStorage.getItem("sdPrcpLocal"));
    const laPrcpLoc = JSON.parse(localStorage.getItem("laPrcpLocal"));
    const bfieldPrcpLoc = JSON.parse(localStorage.getItem("bfieldPrcpLocal"));
    const fresnoPrcpLoc = JSON.parse(localStorage.getItem("fresnoPrcpLocal"));
    const stktonPrcpLoc = JSON.parse(localStorage.getItem("stktonPrcpLocal"));
    const eurekaPrcpLoc = JSON.parse(localStorage.getItem("eurekaPrcpLocal"));

    return {
        bfieldPrcpLoc,
        bfieldTempLoc,
        eurekaPrcpLoc,
        eurekaTempLoc,
        fresnoPrcpLoc,
        fresnoTempLoc,
        laPrcpLoc,
        laTempLoc,
        sdPrcpLoc,
        sdTempLoc,
        stktonPrcpLoc,
        stktonTempLoc
    };
}

export {setGetLocalStorage};

//NOTE FOR DEVS:
//JSON.parse() takes a JSON string and transforms it into a JS object.
//JSON.stringify() takes a JS object and transforms it into a JSON string.