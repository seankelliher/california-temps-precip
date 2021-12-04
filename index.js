import {showLoadingCircles} from "./app/sup-notices.js";
import {formCharts} from "./app/s5-build.js";

//When DOM loads, invoke function.
document.addEventListener("DOMContentLoaded", function () {
    showLoadingCircles();
    formCharts();
});

//NOTE: Fetching data from NOAA takes a few seconds.
//Getting it from Local Storage is faster, but still requires time.
//Therefore, I display the loading circles in both cases.