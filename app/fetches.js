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

//Variables - time periods.
const y1970s = "startdate=1970-01-01&enddate=1979-12-31&";
const y1980s = "startdate=1980-01-01&enddate=1989-12-31&";
const y1990s = "startdate=1990-01-01&enddate=1999-12-31&";
const y2000s = "startdate=2000-01-01&enddate=2009-12-31&";
const y2010s = "startdate=2010-01-01&enddate=2019-12-31&";
const y2020s = "startdate=2020-01-01&enddate=2020-12-31&";

//Variable - limit (number of results returned).
const limit = "limit=140"; //7 stations * 2 data sets * 10 years = 140.

//Function that fetches annual precipitation & days over 90 degrees F.
function fetchWeatherData(years) {
    fetch(`${base + set + catTypes + stations + units + years + limit}`, {
        headers: {token: "ADD-YOUR-NOAA-TOKEN-HERE"}
    }).then((resp) => resp.json()).then((json) => window.console.log(json));
}

//Function calls.
fetchWeatherData(y1970s);
//fetchWeatherData(y1980s);
//fetchWeatherData(y1990s);
//fetchWeatherData(y2000s);
//fetchWeatherData(y2010s);
//fetchWeatherData(y2020s);

//NOTES:
//1. Combining multiple stations, data categories, and data types works.
//2. Including data categories is optional. Results are same without them.
//3. Querying a time period over 10 years returns an error.
//4. If not specified, limit for NOAA queries is 25.
//5. Your NOAA token is viewable by anyone inspecting your code.