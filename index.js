import {fetchWeatherData} from "./app/fetches.js"
import {configTemp, configPrcp} from "./app/formats.js";

var tempChart = new Chart(
    document.getElementById("temp-chart"),
    configTemp
);
var prcpChart = new Chart(
    document.getElementById("prcp-chart"),
    configPrcp
);

fetchWeatherData();

//TO DO: add function to check local storage before fetching.
//No reason to fetch all that data if it's already here.
//Also, change "var" to "const" after chart is working.