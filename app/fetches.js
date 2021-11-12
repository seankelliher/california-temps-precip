//The below fetches annual precipitation & days over 90 degrees F.
//The variables are numerous, but spare us from long, confusing fetch strings.

//Variables - base URL, data set, data categories & types.
const base = "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?";
const set = "datasetid=GSOY&";
const catType1 = "datacategoryid=ANNTEMP&datatypeid=DX90&";
const catType2 = "datacategoryid=ANNPRCP&datatypeid=PRCP&";
const catTypes = `${catType1 + catType2}`;

//Variables - stations (individual and combined).
const sd = "stationid=GHCND:USW00023188&"; //San Diego.
const la = "stationid=GHCND:USW00023174&";
const bfield = "stationid=GHCND:USW00023155&"; //Bakersfield.
const fresno = "stationid=GHCND:USW00093193&";
const stockton = "stationid=GHCND:USW00023237&";
const eureka = "stationid=GHCND:USW00024213&";
const stations = `${sd + la + bfield + fresno + stockton + eureka}`;

//Variable - units (makes results standard, not metric).
const units = "units=standard&";

//Variable - all combined, except years and limit.
const intro = `${base + set + catTypes + stations + units}`;

//Variables - time periods (individual and combined).
const y1970s = "startdate=1970-01-01&enddate=1979-12-31&";
const y1980s = "startdate=1980-01-01&enddate=1989-12-31&";
const y1990s = "startdate=1990-01-01&enddate=1999-12-31&";
const y2000s = "startdate=2000-01-01&enddate=2009-12-31&";
const y2010s = "startdate=2010-01-01&enddate=2019-12-31&";
const y2020s = "startdate=2020-01-01&enddate=2020-12-31&";
const years = [y1970s, y1980s, y1990s, y2000s, y2010s, y2020s];

//Variable - limit (number of results returned).
const limit = "limit=120"; //6 stations * 2 data sets * 10 years = 120.

//Function that fetches annual precipitation & days over 90 degrees F.
async function fetchWeatherData() {
    try {
        const response = await Promise.all(
            years.map(function (year) {
                return fetch(`${intro + year + limit}`, {headers: {token: "ADD-YOUR-NOAA-TOKEN-HERE"}}).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject({
                            message: "Error fetching data. Error code:",
                            status: response.status
                        });
                    }
                });
            })
        );
        extractWhatsNeeded(response);
    } catch (error) {
        window.console.log(error.message, error.status);
    }
}

function extractWhatsNeeded(response) {
    //Extract individual arrays from response.
    const results0 = response[0].results;
    const results1 = response[1].results;
    const results2 = response[2].results;
    const results3 = response[3].results;
    const results4 = response[4].results;
    const results5 = response[5].results;

    //Combine them into one array.
    const resultsAll = [
        ...results0,
        ...results1,
        ...results2,
        ...results3,
        ...results4,
        ...results5
    ];
    //console.log("results all", resultsAll);
    sortByCatsAndStations(resultsAll);
}

//"Helper" function for the For Each function below.
//Accepts date of object being evaluated. Ex., 1973-01-01T00:00:00.
//Extracts the year. Ex., 1973.
//Subtracts 1970 to determine position for value in array for results.
//For example, in the sanDiegoTemp array, the value for 1973 goes in position 3.
function findPosition(x) {
    return x.substring(0, 4) - 1970;
}

function sortByCatsAndStations(resultsAll) {

    //Placeholders - annual temp (DX90) arrays.
    const sanDiegoTemp = new Array(50);
    const losAngelesTemp = new Array(50);
    const bakersfieldTemp = new Array(50);
    const fresnoTemp = new Array(50);
    const stocktonTemp = new Array(50);
    const eurekaTemp = new Array(50);

    //Placeholders - annual prcp (PRCP) arrays.
    const sanDiegoPrcp = new Array(50);
    const losAngelesPrcp = new Array(50);
    const bakersfieldPrcp = new Array(50);
    const fresnoPrcp = new Array(50);
    const stocktonPrcp = new Array(50);
    const eurekaPrcp = new Array(50);

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
    });
        //Put the items in local storage - Temps.
        localStorage.setItem("sanDiegoTempLocal", JSON.stringify(sanDiegoTemp));
        localStorage.setItem("losAngelesTempLocal", JSON.stringify(losAngelesTemp));
        localStorage.setItem("bakersfieldTempLocal", JSON.stringify(bakersfieldTemp));
        localStorage.setItem("fresnoTempLocal", JSON.stringify(fresnoTemp));
        localStorage.setItem("stocktonTempLocal", JSON.stringify(stocktonTemp));
        localStorage.setItem("eurekaTempLocal", JSON.stringify(eurekaTemp));

        //Put the items in local storage - Prcp.
        localStorage.setItem("sanDiegoPrcpLocal", JSON.stringify(sanDiegoPrcp));
        localStorage.setItem("losAngelesPrcpLocal", JSON.stringify(losAngelesPrcp));
        localStorage.setItem("bakersfieldPrcpLocal", JSON.stringify(bakersfieldPrcp));
        localStorage.setItem("fresnoPrcpLocal", JSON.stringify(fresnoPrcp));
        localStorage.setItem("stocktonPrcpLocal", JSON.stringify(stocktonPrcp));
        localStorage.setItem("eurekaPrcpLocal", JSON.stringify(eurekaPrcp));
}

//Get the items in local storage - Temps.
const sanDiegoTempLoc = JSON.parse(localStorage.getItem("sanDiegoTempLocal"));
const losAngelesTempLoc = JSON.parse(localStorage.getItem("losAngelesTempLocal"));
const bakersfieldTempLoc = JSON.parse(localStorage.getItem("bakersfieldTempLocal"));
const fresnoTempLoc = JSON.parse(localStorage.getItem("fresnoTempLocal"));
const stocktonTempLoc = JSON.parse(localStorage.getItem("stocktonTempLocal"));
const eurekaTempLoc = JSON.parse(localStorage.getItem("eurekaTempLocal"));

//Get the items in local storage - Prcp.
const sanDiegoPrcpLoc = JSON.parse(localStorage.getItem("sanDiegoPrcpLocal"));
const losAngelesPrcpLoc = JSON.parse(localStorage.getItem("losAngelesPrcpLocal"));
const bakersfieldPrcpLoc = JSON.parse(localStorage.getItem("bakersfieldPrcpLocal"));
const fresnoPrcpLoc = JSON.parse(localStorage.getItem("fresnoPrcpLocal"));
const stocktonPrcpLoc = JSON.parse(localStorage.getItem("stocktonPrcpLocal"));
const eurekaPrcpLoc = JSON.parse(localStorage.getItem("eurekaPrcpLocal"));

export {
    fetchWeatherData,
    sanDiegoTempLoc,
    losAngelesTempLoc,
    bakersfieldTempLoc,
    fresnoTempLoc,
    stocktonTempLoc,
    eurekaTempLoc,
    sanDiegoPrcpLoc,
    losAngelesPrcpLoc,
    bakersfieldPrcpLoc,
    fresnoPrcpLoc,
    stocktonPrcpLoc,
    eurekaPrcpLoc
};

//REMEMBER: REMOVE TOKEN BEFORE ADDING AND COMMITING!!!!

//NOTES:
//1. Combining multiple stations, data categories, and data types works.
//2. Including data categories is optional. Results are same without them.
//3. Querying a time period over 10 years returns an error.
//4. If not specified, limit for NOAA queries is 25.
//5. Your NOAA token is viewable by anyone inspecting your code.
//6. NOAA's rate limits are 5 requests per second and 10,000 requests per day.