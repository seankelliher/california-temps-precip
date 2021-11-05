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