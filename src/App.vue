<script setup>
import TempsPrecipChart from "./components/TempsPrecipChart.vue";
import TempsPrecipTable from "./components/TempsPrecipTable.vue";
import PanoImage from "./components/PanoImage.vue";
import LocationsMap from "./components/LocationsMap.vue";
</script>

<template>
    <div id="container">
        <PanoImage />
        <LocationsMap />
        <TempsPrecipChart />
        <TempsPrecipTable />
    </div>
</template>

<style scoped>
</style>