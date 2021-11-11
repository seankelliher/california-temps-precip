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
(async function fetchWeatherData() {
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
})(); //IIFE pattern.

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
                if (sanDiegoTemp.length === 50) {
                    setLocalStorage("SanDiegoTempLocal", SanDiegoTemp); 
                } else {
                    sanDiegoTemp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00023174") {
                if (losAngelesTemp.length === 50) {
                    setLocalStorage("LosAngelesTempLocal", LosAngelesTemp); 
                } else {
                    losAngelesTemp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00023155") {
                if (bakersfieldTemp.length === 50) {
                    setLocalStorage("BakersfieldTempLocal", BakersfieldTemp); 
                } else {
                    bakersfieldTemp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00093193") {
                if (fresnoTemp.length === 50) {
                    setLocalStorage("FresnoTempLocal", FresnoTemp); 
                } else {
                    fresnoTemp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00023237") {
                if (stocktonTemp.length === 50) {
                    setLocalStorage("StocktonTempLocal", StocktonTemp); 
                } else {
                    stocktonTemp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00024213") {
                if (eurekaTemp.length === 50) {
                    setLocalStorage("EurekaTempLocal", EurekaTemp); 
                } else {
                    eurekaTemp[findPosition(index.date)] = index.value;
                }
            }
        } else if (index.datatype === "PRCP") {
            if (index.station === "GHCND:USW00023188") {
                if (sanDiegoPrcp.length === 50) {
                    setLocalStorage("SanDiegoPrcpLocal", SanDiegoPrcp); 
                } else {
                    sanDiegoPrcp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00023174") {
                if (losAngelesPrcp.length === 50) {
                    setLocalStorage("LosAngelesPrcpLocal", LosAngelesPrcp); 
                } else {
                    losAngelesPrcp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00023155") {
                if (bakersfieldPrcp.length === 50) {
                    setLocalStorage("BakersfieldPrcpLocal", BakersfieldPrcp); 
                } else {
                    bakersfieldPrcp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00093193") {
                if (fresnoPrcp.length === 50) {
                    setLocalStorage("FresnoPrcpLocal", FresnoPrcp); 
                } else {
                    fresnoPrcp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00023237") {
                if (stocktonPrcp.length === 50) {
                    setLocalStorage("StocktonPrcpLocal", StocktonPrcp); 
                } else {
                    stocktonPrcp[findPosition(index.date)] = index.value;
                }
            } else if (index.station === "GHCND:USW00024213") {
                if (eurekaPrcp.length === 50) {
                    setLocalStorage("EurekaPrcpLocal", EurekaPrcp); 
                } else {
                    eurekaPrcp[findPosition(index.date)] = index.value;
                }
            }
        }
    });
}

//REMEMBER: REMOVE TOKEN BEFORE ADDING AND COMMITING!!!!

//NOTES:
//1. Combining multiple stations, data categories, and data types works.
//2. Including data categories is optional. Results are same without them.
//3. Querying a time period over 10 years returns an error.
//4. If not specified, limit for NOAA queries is 25.
//5. Your NOAA token is viewable by anyone inspecting your code.
//6. NOAA's rate limits are 5 requests per second and 10,000 requests per day.