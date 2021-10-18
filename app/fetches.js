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
const graton = "stationid=GHCND:USC00043578&";
const stockton = "stationid=GHCND:USW00023237&";
const eureka = "stationid=GHCND:USW00024213&";
const stations = `${sd + la + bfield + fresno + graton + stockton + eureka}`;

//Variable - units (makes results standard, not metric).
const units = "units=standard&";

//Variables - time periods (individual and combined).
const y1970s = "startdate=1970-01-01&enddate=1979-12-31&";
const y1980s = "startdate=1980-01-01&enddate=1989-12-31&";
const y1990s = "startdate=1990-01-01&enddate=1999-12-31&";
const y2000s = "startdate=2000-01-01&enddate=2009-12-31&";
const y2010s = "startdate=2010-01-01&enddate=2019-12-31&";
const y2020s = "startdate=2020-01-01&enddate=2020-12-31&";
const years = [y1970s, y1980s, y1990s, y2000s, y2010s, y2020s];

//Variable - limit (number of results returned).
const limit = "limit=140"; //7 stations * 2 data sets * 10 years = 140.

//Data from fetches goes here.
const yearsResult = [];

//Function that fetches annual precipitation & days over 90 degrees F.
function fetchWeatherData(years) {
    return fetch(`${base + set + catTypes + stations + units + years + limit}`, {
        headers: {token: "ADD-YOUR-NOAA-TOKEN-HERE"}
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject({
                message: "Something went wrong fetching data. Error code:",
                status: response.status
            });
        }
    }).then(function (json) {
        return json;
    }).catch(function (error) {
        window.console.log(error.message, error.status);
    });
}

//Function call. Invokes function for each item in "const years" array.
//When all Promises have resolved, adds data to "const yearsResult" array.
Promise.all(
  years.map(fetchWeatherData)
).then((yearsResult) => {
  console.log(yearsResult);
});

//REMEMBER: REMOVE TOKEN BEFORE ADDING AND COMMITING!!!!

//NOTES:
//1. Combining multiple stations, data categories, and data types works.
//2. Including data categories is optional. Results are same without them.
//3. Querying a time period over 10 years returns an error.
//4. If not specified, limit for NOAA queries is 25.
//5. Your NOAA token is viewable by anyone inspecting your code.
//6. NOAA's rate limits are 5 requests per second and 10,000 requests per day.