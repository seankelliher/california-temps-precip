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
//const y2020s = "startdate=2020-01-01&enddate=2020-12-31&";
//const years = [y1970s, y1980s, y1990s, y2000s, y2010s, y2020s];
const years = [y1970s, y1980s, y1990s, y2000s, y2010s];

//Variable - limit (number of results returned).
const limit = "limit=120"; //6 stations * 2 data sets * 10 years = 120.

//Function that fetches annual precipitation & days over 90 degrees F.
async function fetchData() {
    try {
        const data = await Promise.all(
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
        return {
            data
        };
    } catch (error) {
        window.console.log(error.message, error.status);
    }
}

export {fetchData};