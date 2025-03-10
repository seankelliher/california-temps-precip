<script setup>
import { ref, onMounted } from "vue";
import { yearsList, weatherData } from "../data/weather-data.js";
import { store } from "../composables/store.js";
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
                backgroundColor: "#74a60a", // green
                borderColor: "#74a60a",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Los Angeles",
                data: losAngelosTemps.value,
                backgroundColor: "#f2c46d", // yellow
                borderColor: "#f2c46d",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Bakersfield",
                data: bakersfieldTemps.value,
                backgroundColor: "#f25c05", // orange
                borderColor: "#f25c05",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Fresno",
                data: fresnoTemps.value,
                backgroundColor: "#a8b2bf", // grey
                borderColor: "#a8b2bf",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Stockton",
                data: stocktonTemps.value,
                backgroundColor: "#121b26", // black
                borderColor: "#121b26",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Eureka",
                data: eurekaTemps.value,
                backgroundColor: "#0a8cbf", // blue
                borderColor: "#0a8cbf",
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
                backgroundColor: "#74A60A", // green
                borderColor: "#74A60A",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Los Angeles",
                data: losAngelosPrecip.value,
                backgroundColor: "#F2C46D", // yellow
                borderColor: "#F2C46D",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Bakersfield",
                data: bakersfieldPrecip.value,
                backgroundColor: "#F25C05", // orange
                borderColor: "#F25C05",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Fresno",
                data: fresnoPrecip.value,
                backgroundColor: "#A8B2BF", // grey
                borderColor: "#A8B2BF",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Stockton",
                data: stocktonPrecip.value,
                backgroundColor: "#121B26", // black
                borderColor: "#121B26",
                borderWidth: 1,
                tension: 0.3
            },
            {
                label: "Eureka",
                data: eurekaPrecip.value,
                backgroundColor: "#0A8CBF", // blue
                borderColor: "#0A8CBF",
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
</script>

<template>
    <div class="chart-table-container chart-view">
        <nav>
            <button
                @click="store.updateChartDisplay('heat')"
                @keyup.enter="store.updateChartDisplay('heat')"
                :class="{ selected: store.displayHeat }"
                class="bevan-regular"
            >
                Heat
            </button>
            <button
                @click="store.updateChartDisplay('precip')"
                @keyup.enter="store.updateChartDisplay('precip')"
                :class="{ selected: store.displayPrecip }"
                class="bevan-regular"
            >
                Precipitation
            </button>
        </nav>

        <div class="chart-table">
            <div class="chart-table-desc">
                <h3
                    v-show="store.displayHeat"
                    class="bevan-regular"
                >
                    Days above 90&deg; F
                </h3>
                <h3
                    v-show="store.displayPrecip"
                    class="bevan-regular"
                >
                    Precipitation in inches
                </h3>
            </div>
            <canvas id="calif-temps-chart" v-show="store.displayHeat"></canvas>
            <canvas id="calif-precip-chart" v-show="store.displayPrecip"></canvas>
            <div class="chart-table-caption roboto-flex three">Data from the National Oceanic and Atmospheric Administration (NOAA)</div>
        </div>
    </div>
</template>

<style scoped>
</style>