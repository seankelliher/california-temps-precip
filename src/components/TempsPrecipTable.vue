<script setup>
import { store } from "../composables/store.js";
import { weatherData } from "../data/weather-data.js";

</script>

<template>
    <div class="chart-table-container table-view">
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

            <table v-if="store.displayHeat">
                <thead>
                    <tr>
                        <td class="roboto-serif six">Year</td>
                        <td class="roboto-serif six">SanDg</td>
                        <td class="roboto-serif six">LosAn</td>
                        <td class="roboto-serif six">Bfield</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in weatherData" :key="item.id">
                        <td class="roboto-serif four">{{ item.id.substring(1,5) }}</td>
                        <td class="roboto-serif four">{{ item.sanDiegoTemps }}</td>
                        <td class="roboto-serif four">{{ item.losAngelosTemps }}</td>
                        <td class="roboto-serif four">{{ item.bakersfieldTemps }}</td>
                    </tr>
                </tbody>
            </table>

            <table v-if="store.displayHeat">
                <thead>
                    <tr>
                        <td class="roboto-serif six">Year</td>
                        <td class="roboto-serif six">Fresno</td>
                        <td class="roboto-serif six">Stock</td>
                        <td class="roboto-serif six">Eurka</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in weatherData" :key="item.id">
                        <td class="roboto-serif four">{{ item.id.substring(1,5) }}</td>
                        <td class="roboto-serif four">{{ item.fresnoTemps }}</td>
                        <td class="roboto-serif four">{{ item.stocktonTemps }}</td>
                        <td class="roboto-serif four">{{ item.eurekaTemps }}</td>
                    </tr>
                </tbody>
            </table>

            <table v-if="store.displayPrecip">
                <thead>
                    <tr>
                        <td class="roboto-serif six">Year</td>
                        <td class="roboto-serif six">SanDg</td>
                        <td class="roboto-serif six">LosAn</td>
                        <td class="roboto-serif six">Bfield</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in weatherData" :key="item.id">
                        <td class="roboto-serif four">{{ item.id.substring(1,5) }}</td>
                        <td class="roboto-serif four">{{ item.sanDiegoPrecip }}</td>
                        <td class="roboto-serif four">{{ item.losAngelosPrecip }}</td>
                        <td class="roboto-serif four">{{ item.bakersfieldPrecip }}</td>
                    </tr>
                </tbody>
            </table>

            <table v-if="store.displayPrecip">
                <thead>
                    <tr>
                        <td class="roboto-serif six">Year</td>
                        <td class="roboto-serif six">Fresno</td>
                        <td class="roboto-serif six">Stock</td>
                        <td class="roboto-serif six">Eurka</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in weatherData" :key="item.id">
                        <td class="roboto-serif four">{{ item.id.substring(1,5) }}</td>
                        <td class="roboto-serif four">{{ item.fresnoPrecip }}</td>
                        <td class="roboto-serif four">{{ item.stocktonPrecip }}</td>
                        <td class="roboto-serif four">{{ item.eurekaPrecip }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
            <div class="chart-table-caption roboto-flex three">Data from the National Oceanic and Atmospheric Administration (NOAA)</div>
    </div>
</template>

<style scoped>
</style>