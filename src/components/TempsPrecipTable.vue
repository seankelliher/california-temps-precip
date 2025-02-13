<script setup>
import { weatherData } from "../composables/store.js";
import { ref } from "vue";

const displayHeat = ref(true);
const displayPrecip = ref(false);

// Updates which table is displayed when user clicks tab.
function updateTableDisplay(table) {
    if (table === "heat") {
        displayHeat.value = true;
        displayPrecip.value = false;
    }

    if (table === "precip") {
        displayPrecip.value = true;
        displayHeat.value = false;
    }
}
</script>

<template>
    <div class="chart-table-container table-view">
        <nav>
            <button
                @click="updateTableDisplay('heat')"
                @keyup.enter="updateTableDisplay('heat')"
                :class="{ selected: displayHeat }"
                class="bevan-regular"
            >
                Heat
            </button>
            <button
                @click="updateTableDisplay('precip')"
                @keyup.enter="updateTableDisplay('precip')"
                :class="{ selected: displayPrecip }"
                class="bevan-regular"
            >
                Precipitation
            </button>
        </nav>

        <div class="chart-table">
            <div class="chart-table-desc">
                <h3
                    v-show="displayHeat"
                    class="bevan-regular"
                >
                    Days above 90&deg; F
                </h3>
                <h3
                    v-show="displayPrecip"
                    class="bevan-regular"
                >
                    Precipitation in inches
                </h3>
            </div>

            <table v-if="displayHeat">
                <th>
                    <td class="roboto-serif six">Year</td>
                    <td class="roboto-serif six">SanDg</td>
                    <td class="roboto-serif six">LosAn</td>
                    <td class="roboto-serif six">Bfield</td>
                </th>
                <tr v-for="item in weatherData" :key="item.id">
                    <td class="roboto-serif four">{{ item.id.substring(1,5) }}</td>
                    <td class="roboto-serif four">{{ item.sanDiegoTemps }}</td>
                    <td class="roboto-serif four">{{ item.losAngelosTemps }}</td>
                    <td class="roboto-serif four">{{ item.bakersfieldTemps }}</td>
                </tr>
            </table>

            <table v-if="displayHeat">
                <th>
                    <td class="roboto-serif six">Year</td>
                    <td class="roboto-serif six">Fresno</td>
                    <td class="roboto-serif six">Stock</td>
                    <td class="roboto-serif six">Eurka</td>
                </th>
                <tr v-for="item in weatherData" :key="item.id">
                    <td class="roboto-serif four">{{ item.id.substring(1,5) }}</td>
                    <td class="roboto-serif four">{{ item.fresnoTemps }}</td>
                    <td class="roboto-serif four">{{ item.stocktonTemps }}</td>
                    <td class="roboto-serif four">{{ item.eurekaTemps }}</td>
                </tr>
            </table>

            <table v-if="displayPrecip">
                <th>
                    <td class="roboto-serif six">Year</td>
                    <td class="roboto-serif six">SanDg</td>
                    <td class="roboto-serif six">LosAn</td>
                    <td class="roboto-serif six">Bfield</td>
                </th>
                <tr v-for="item in weatherData" :key="item.id">
                    <td class="roboto-serif four">{{ item.id.substring(1,5) }}</td>
                    <td class="roboto-serif four">{{ item.sanDiegoPrecip }}</td>
                    <td class="roboto-serif four">{{ item.losAngelosPrecip }}</td>
                    <td class="roboto-serif four">{{ item.bakersfieldPrecip }}</td>
                </tr>
            </table>

            <table v-if="displayPrecip">
                <th>
                    <td class="roboto-serif six">Year</td>
                    <td class="roboto-serif six">Fresno</td>
                    <td class="roboto-serif six">Stock</td>
                    <td class="roboto-serif six">Eurka</td>
                </th>
                <tr v-for="item in weatherData" :key="item.id">
                    <td class="roboto-serif four">{{ item.id.substring(1,5) }}</td>
                    <td class="roboto-serif four">{{ item.fresnoPrecip }}</td>
                    <td class="roboto-serif four">{{ item.stocktonPrecip }}</td>
                    <td class="roboto-serif four">{{ item.eurekaPrecip }}</td>
                </tr>
            </table>
        </div>
            <div class="chart-table-caption roboto-flex three">Data from the National Oceanic and Atmospheric Administration (NOAA)</div>
    </div>
</template>

<style scoped>
</style>