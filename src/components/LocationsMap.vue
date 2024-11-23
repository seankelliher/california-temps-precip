<script setup>
</script>

<template>
    <section>
        <div class="text">
            <h2 class="bevan-regular">How is California weather changing?</h2>
            <p class="roboto-serif four">The allure of the Golden State has diminished in recent years. Wildfires and hardships from drought are now undeniable features of daily life. At the root of both afflictions are excessive heat and lack of precipitation. We reviewed data to see how both have changed over the past 50 years.</p>

            <p class="roboto-serif four">The National Oceanic and Atmospheric Administration (NOAA) maintains weather stations across the United States and tracks daily weather conditions. As official as this sounds, weather stations are frequently maintained by volunteers and it's difficult to find ones with continuous records for long spans of time.</p>

            <p class="roboto-serif four">We selected six sites: San Diego, Los Angeles, Bakersfield, Fresno, Stockton, and Eureka. They had continuous records for a 50-year span and are spread across the state of California, spanning north to south.</p>
        </div>

        <!-- Mapbox token restricted to single URL -->
        <figure class="map">
            <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-s-1+0056d6(-124.16367,40.80207),pin-s-2+0056d6(-121.29078,37.9577),pin-s-3+0056d6(-119.77237,36.74773),pin-s-4+0056d6(-119.01871,35.37329),pin-s-5+0056d6(-118.24368,34.05223),pin-s-6+0056d6(-117.16472,32.71571)/-118.9815,37.4282,5.19,0/600x660@2x?access_token=pk.eyJ1Ijoic2s1NjQ2NzMiLCJhIjoiY2x5Mjl4YXp5MDl5MDJrcG9weHc3ZmViZyJ9.vvFRqD8WngjCccqL6IspVw" alt="map of California">
            <figcaption class="roboto-serif four">Weather data comes from these six locations: 1. Eureka, 2. Stockton, 3. Fresno, 4. Bakersfield, 5. Los Angeles, 6. San Diego</figcaption>
        </figure>

        <div class="text">
            <h2 class="bevan-regular">Charts</h2>
            <p class="roboto-serif four">The charts below display some of the stations' data. The "heat" chart displays the number of days with maximum temperature greater than 90 degrees Fahrenheit. The "precipitation" chart displays the annual precipitation in inches.</p>
        </div>
    </section>
</template>

<style scoped>
</style>