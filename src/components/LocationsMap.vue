<script setup>
</script>

<template>
    <section>
        <div class="text">
            <h2>50 Years of Weather</h2>
            <p>The National Oceanic and Atmospheric Administration (NOAA) maintains weather stations across the United States and tracks daily weather conditions. As official as this sounds, weather stations are frequently maintained by volunteers and it's difficult to find ones with continuous records for long spans of time. The six sites in this project &mdash; located in San Diego, Los Angeles, Bakersfield, Fresno, Stockton, and Eureka &mdash; were chosen for two reasons. They had continuous records for a 50-year span &mdash; the first day of 1970 through the last day of 2019. And, they were spread across the state of California, spanning north to south. This charts below display some of the stations' data: the annual number days where the temperature reached 90 degrees Fahrenheit or above, and the annual precipitation. They let readers explore California's changing climate.</p>
        </div>
        <!-- Mapbox token restricted to single URL -->
        <figure class="map">
            <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-s-1+0056d6(-124.16367,40.80207),pin-s-2+0056d6(-121.29078,37.9577),pin-s-3+0056d6(-119.77237,36.74773),pin-s-4+0056d6(-119.01871,35.37329),pin-s-5+0056d6(-118.24368,34.05223),pin-s-6+0056d6(-117.16472,32.71571)/-118.9815,37.4282,5.19,0/600x660@2x?access_token=pk.eyJ1Ijoic2s1NjQ2NzMiLCJhIjoiY2x5Mjl4YXp5MDl5MDJrcG9weHc3ZmViZyJ9.vvFRqD8WngjCccqL6IspVw">
            <figcaption>1. Eureka, 2. Stockton, 3. Fresno, 4. Bakersfield, 5. Los Angeles, 6. San Diego</figcaption>
        </figure>
    </section>
</template>

<style scoped>
</style>