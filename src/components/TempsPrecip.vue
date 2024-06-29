<script setup>
import { ref, onMounted, watch } from "vue";
import { yearsList } from "../composables/store.js";
import Chart from "chart.js/auto";

const sanDiegoTemps = ref([]);
const sanDiegoPrecip = ref([]);
const losAngelosTemps = ref([]);
const losAngelosPrecip = ref([]);
const bakersfieldTemps = ref([]);
const bakersfieldPrecip = ref([]);
const fresnoTemps = ref([]);
const fresnoPrecip = ref([]);
const stocktonTemps = ref([]);
const stocktonPrecip = ref([]);
const eurekaTemps = ref([]); 
const eurekaPrecip = ref([]);

const tally = ref(0);
const loadShow = ref(false);
const errorShow = ref(false);
const errorMsg = ref();

// On mount, check if data is in local storage from previous visit.
// If no, fetch data from NOAA. If yes, get data from local storage.
onMounted(() => {
    if (!localStorage.getItem("caTempsPrecip")) {
        fetchWeatherData();
        loadShow.value = true;
        console.log("fetching data from NOAA");
    } else {
        sanDiegoTemps.value = JSON.parse(localStorage.getItem("sanDiegoTemps"));
        sanDiegoPrecip.value = JSON.parse(localStorage.getItem("sanDiegoPrecip"));
        losAngelosTemps.value = JSON.parse(localStorage.getItem("losAngelosTemps"));
        losAngelosPrecip.value = JSON.parse(localStorage.getItem("losAngelosPrecip"));
        bakersfieldTemps.value = JSON.parse(localStorage.getItem("bakersfieldTemps"));
        bakersfieldPrecip.value = JSON.parse(localStorage.getItem("bakersfieldPrecip"));
        fresnoTemps.value = JSON.parse(localStorage.getItem("fresnoTemps"));
        fresnoPrecip.value = JSON.parse(localStorage.getItem("fresnoPrecip"));
        stocktonTemps.value = JSON.parse(localStorage.getItem("stocktonTemps"));
        stocktonPrecip.value = JSON.parse(localStorage.getItem("stocktonPrecip"));
        eurekaTemps.value = JSON.parse(localStorage.getItem("eurekaTemps"));
        eurekaPrecip.value = JSON.parse(localStorage.getItem("eurekaPrecip"));
        createTempsChart();
        createPrecipChart();
        console.log("using data from local storage");
    }
});

// If fetching data from NOAA (fetchWeatherData function), watch tally.
// When all five decades fetched and sorted, put results in local storage.
watch(tally, (newValue) => {
    if (newValue === 5) {
        loadShow.value = false;
        createTempsChart();
        createPrecipChart();

        localStorage.setItem("sanDiegoTemps", JSON.stringify(sanDiegoTemps.value ));
        localStorage.setItem("sanDiegoPrecip", JSON.stringify(sanDiegoPrecip.value));
        localStorage.setItem("losAngelosTemps", JSON.stringify(losAngelosTemps.value));
        localStorage.setItem("losAngelosPrecip", JSON.stringify(losAngelosPrecip.value));
        localStorage.setItem("bakersfieldTemps", JSON.stringify(bakersfieldTemps.value));
        localStorage.setItem("bakersfieldPrecip", JSON.stringify(bakersfieldPrecip.value));
        localStorage.setItem("fresnoTemps", JSON.stringify(fresnoTemps.value));
        localStorage.setItem("fresnoPrecip", JSON.stringify(fresnoPrecip.value));
        localStorage.setItem("stocktonTemps", JSON.stringify(stocktonTemps.value));
        localStorage.setItem("stocktonPrecip", JSON.stringify(stocktonPrecip.value));
        localStorage.setItem("eurekaTemps", JSON.stringify(eurekaTemps.value)); 
        localStorage.setItem("eurekaPrecip", JSON.stringify(eurekaPrecip.value));
        localStorage.setItem("caTempsPrecip", "all set");
    }
});

// Function to fetch and sort data from NOAA. Sorts results into arrays.
function fetchWeatherData() {
    const decades = ["year1970s", "year1980s", "year1990s", "year2000s", "year2010s"];
    Promise.all(decades.map((decade) => {
        fetch(`/${decade}`) // Using locally -> http://localhost:4040/${decade}
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(`Error: ${response.status}. Please wait a few seconds and try refreshing your browser.`);
                }
            })
            .then((data) => {
                data.results.forEach(function (dr) {
                    const position = Number(dr.date.substring(0, 4) - 1970);

                    if (dr.station === "GHCND:USW00023188") {
                        if (dr.datatype === "DX90") {
                            sanDiegoTemps.value[`${position}`] = dr.value;
                        } else if (dr.datatype === "PRCP") {
                            sanDiegoPrecip.value[`${position}`] = dr.value;
                        }
                    } else if (dr.station === "GHCND:USW00023174") {
                        if (dr.datatype === "DX90") {
                            losAngelosTemps.value[`${position}`] = dr.value;
                        } else if (dr.datatype === "PRCP") {
                            losAngelosPrecip.value[`${position}`] = dr.value;
                        }
                    } else if (dr.station === "GHCND:USW00023155") {
                        if (dr.datatype === "DX90") {
                            bakersfieldTemps.value[`${position}`] = dr.value;
                        } else if (dr.datatype === "PRCP") {
                            bakersfieldPrecip.value[`${position}`] = dr.value;
                        }
                    } else if (dr.station === "GHCND:USW00093193") {
                        if (dr.datatype === "DX90") {
                            fresnoTemps.value[`${position}`] = dr.value;
                        } else if (dr.datatype === "PRCP") {
                            fresnoPrecip.value[`${position}`] = dr.value;
                        }
                    } else if (dr.station === "GHCND:USW00023237") {
                        if (dr.datatype === "DX90") {
                            stocktonTemps.value[`${position}`] = dr.value;
                        } else if (dr.datatype === "PRCP") {
                            stocktonPrecip.value[`${position}`] = dr.value;
                        }
                    } else if (dr.station === "GHCND:USW00024213") {
                        if (dr.datatype === "DX90") {
                            eurekaTemps.value[`${position}`] = dr.value;
                        } else if (dr.datatype === "PRCP") {
                            eurekaPrecip.value[`${position}`] = dr.value;
                        }
                    }
                });
            })
            .then(() => {
                tally.value = tally.value + 1;
                console.log(tally.value);
            })
            .catch((error) => {
                errorMsg.value = error;
                errorShow.value = true;
                loadShow.value = false;
            });
    }));
}

// Function to create a chart with Chart.js.
function createTempsChart() {
    const califTempsChart = document.getElementById("calif-temps-chart");

    new Chart(califTempsChart, {
        type: "scatter",
        data: {
            labels: yearsList,
            datasets: [{
                label: "San Diego",
                data: sanDiegoTemps.value,
                backgroundColor: "#039be5", // light blue 600.
                borderColor: "#039be5",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Los Angeles",
                data: losAngelosTemps.value,
                backgroundColor: "#e53935", // red 600.
                borderColor: "#e53935",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Bakersfield",
                data: bakersfieldTemps.value,
                backgroundColor: "#7cb342", // light green 600.
                borderColor: "#7cb342",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Fresno",
                data: fresnoTemps.value,
                backgroundColor: "#ffb300", // amber 600.
                borderColor: "#ffb300",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Stockton",
                data: stocktonTemps.value,
                backgroundColor: "#757575", // gray 600.
                borderColor: "#757575",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Eureka",
                data: eurekaTemps.value,
                backgroundColor: "#8e24aa", // purple 600.
                borderColor: "#8e24aa",
                borderWidth: 1,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                x: { // removes comma from years
                    ticks: {
                        callback: function(value) {
                            return value;
                        }
                    }
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || "";

                            if (label) {
                                label += ": ";
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + " days";
                            }
                            return label;
                        }
                    }
                },
                legend: {
                    labels: {
                        font: {
                            size: 14,
                            family: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        }
                    }
                }
            },
            elements: {
                point: {
                    radius: 5
                }
            }
        }
    });
}

// Function to create a chart with Chart.js.
function createPrecipChart() {
    const califPrecipChart = document.getElementById("calif-precip-chart");

    new Chart(califPrecipChart, {
        type: "scatter",
        data: {
            labels: yearsList,
            datasets: [{
                label: "San Diego",
                data: sanDiegoPrecip.value,
                backgroundColor: "#039be5", // light blue 600.
                borderColor: "#039be5",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Los Angeles",
                data: losAngelosPrecip.value,
                backgroundColor: "#e53935", // red 600.
                borderColor: "#e53935",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Bakersfield",
                data: bakersfieldPrecip.value,
                backgroundColor: "#7cb342", // light green 600.
                borderColor: "#7cb342",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Fresno",
                data: fresnoPrecip.value,
                backgroundColor: "#ffb300", // amber 600.
                borderColor: "#ffb300",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Stockton",
                data: stocktonPrecip.value,
                backgroundColor: "#757575", // gray 600.
                borderColor: "#757575",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Eureka",
                data: eurekaPrecip.value,
                backgroundColor: "#8e24aa", // purple 600.
                borderColor: "#8e24aa",
                borderWidth: 1,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                x: { // removes comma from years
                    ticks: {
                        callback: function(value) {
                            return value;
                        }
                    }
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || "";

                            if (label) {
                                label += ": ";
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + " inches";
                            }
                            return label;
                        }
                    }
                },
                legend: {
                    labels: {
                        font: {
                            size: 14,
                            family: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        }
                    }
                }
            },
            elements: {
                point: {
                    radius: 5
                }
            }
        }
    });
}
</script>

<template>
    <div class="chart">
        <div class="chart-desc">
            <p>Number of days 90&deg; F / 32.2&deg; C or above</p>
            <p
                v-if="loadShow === true"
                class="load-msg"
            >
                Data coming from NOAA. Thanks for your patience.
            </p>
            <p
                v-if="errorShow === true"
                class="error-msg"
            >
                {{ errorMsg }}
            </p>
        </div>
        <canvas id="calif-temps-chart"></canvas>
    </div>

    <div class="chart">
        <div class="chart-desc">
            <p>Annual precipitation in inches</p>
        </div>
        <canvas id="calif-precip-chart"></canvas>
    </div>
</template>

<style scoped>
</style>