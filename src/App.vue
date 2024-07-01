<script setup>
import TempsPrecip from "./components/TempsPrecip.vue";
import PanoImage from "./components/PanoImage.vue";
import LocationsMap from "./components/LocationsMap.vue";
</script>

<template>
    <div id="container">
        <PanoImage />
        <LocationsMap />
        <TempsPrecip />
    </div>
</template>

<style scoped>
</style>