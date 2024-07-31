<script setup>
import { ref, onMounted } from "vue";
import { yearsList, weatherData } from "../composables/store.js";
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

const displayHeat = ref(true);
const displayPrecip = ref(false);


onMounted(() => {
    for (const item in weatherData) {
        bakersfieldTemps.value.push(weatherData[item].bakersfieldTemps);
        bakersfieldPrecip.value.push(weatherData[item].bakersfieldPrecip);
        eurekaTemps.value.push(weatherData[item].eurekaTemps);
        eurekaPrecip.value.push(weatherData[item].eurekaPrecip);
        fresnoTemps.value.push(weatherData[item].fresnoTemps);
        fresnoPrecip.value.push(weatherData[item].fresnoPrecip);
        losAngelosTemps.value.push(weatherData[item].losAngelosTemps);
        losAngelosPrecip.value.push(weatherData[item].losAngelosPrecip);
        sanDiegoTemps.value.push(weatherData[item].sanDiegoTemps);
        sanDiegoPrecip.value.push(weatherData[item].sanDiegoPrecip);
        stocktonTemps.value.push(weatherData[item].stocktonTemps);
        stocktonPrecip.value.push(weatherData[item].stocktonPrecip);
    }
    createTempsChart();
    createPrecipChart();
});

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
                            family: "'Helvetica Neue', Helvetica, Arial, sans-serif"
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

// Updates which chart is displayed when user clicks tab.
function updateChartDisplay(chart) {
    if (chart === "heat") {
        displayHeat.value = true;
        displayPrecip.value = false;
    }

    if (chart === "precip") {
        displayPrecip.value = true;
        displayHeat.value = false;
    }
}
</script>

<template>
    <div class="chart-container">
        <nav>
            <button
                @click="updateChartDisplay('heat')"
                @keyup.enter="updateChartDisplay('heat')"
                :class="{ selected: displayHeat }"
            >
                Heat
            </button>
            <button
                @click="updateChartDisplay('precip')"
                @keyup.enter="updateChartDisplay('precip')"
                :class="{ selected: displayPrecip }"
            >
                Precipitation
            </button>
        </nav>

        <div class="chart">
            <div class="chart-desc">
                <h3 v-show="displayHeat">Days above 90&deg; F</h3>
                <h3 v-show="displayPrecip">Precipitation in inches</h3>
            </div>
            <canvas id="calif-temps-chart" v-show="displayHeat"></canvas>
            <canvas id="calif-precip-chart" v-show="displayPrecip"></canvas>
        </div>
    </div>
</template>

<style scoped>
</style>