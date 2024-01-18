// ========================
// Packages - using  ES Modules
// ========================
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========================
// Middlewares
// ========================
app.use(express.static(__dirname + "/dist/")); // For Heroku deployment.

// ========================
// Routes
// ========================
const token = process.env.NOAA_TOKEN; // In Heroku, NOAA token kept here.

// Variables - base URL, data set, data categories & types.
const base = "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?";
const set = "datasetid=GSOY&";
const cat1 = "datacategoryid=ANNTEMP&datatypeid=DX90&";
const cat2 = "datacategoryid=ANNPRCP&datatypeid=PRCP&";
//const catTypes = `${catType1 + catType2}`;

// Variables - stations (individual and combined).
const sd = "stationid=GHCND:USW00023188&"; // San Diego.
const la = "stationid=GHCND:USW00023174&";
const bfield = "stationid=GHCND:USW00023155&"; // Bakersfield.
const fresno = "stationid=GHCND:USW00093193&";
const stockton = "stationid=GHCND:USW00023237&";
const eureka = "stationid=GHCND:USW00024213&";
const stations = `${sd + la + bfield + fresno + stockton + eureka}`;

// Variable - units (makes results standard, not metric).
const units = "units=standard&";

// Variable - all combined, except years and limit.
const intro = `${base + set + cat1 + cat2 + stations + units}`;

// Variables - time periods (individual and combined).
const y1970s = "startdate=1970-01-01&enddate=1979-12-31&";
const y1980s = "startdate=1980-01-01&enddate=1989-12-31&";
const y1990s = "startdate=1990-01-01&enddate=1999-12-31&";
const y2000s = "startdate=2000-01-01&enddate=2009-12-31&";
const y2010s = "startdate=2010-01-01&enddate=2019-12-31&";
//const y2020s = "startdate=2020-01-01&enddate=2020-12-31&";
//
// Variable - limit (number of results returned).
const limit = "limit=120"; //6 stations * 2 data sets * 10 years = 120.

app.get("/year1970s", (req, res) => {
    fetch(`${intro + y1970s + limit}`, {headers: {token: `${token}`}})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            //console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/year1980s", (req, res) => {
    fetch(`${intro + y1980s + limit}`, {headers: {token: `${token}`}})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            //console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/year1990s", (req, res) => {
    fetch(`${intro + y1990s + limit}`, {headers: {token: `${token}`}})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            //console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/year2000s", (req, res) => {
    fetch(`${intro + y2000s + limit}`, {headers: {token: `${token}`}})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            //console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/year2010s", (req, res) => {
    fetch(`${intro + y2010s + limit}`, {headers: {token: `${token}`}})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            //console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get(/.*/, function (req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

// ========================
// Listen
// ========================
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

/* app.listen(4040, () => {
    console.log("Server listening on port 4040");
}); */