import { reactive } from "vue";

export const store = reactive({
    displayHeat: true,
    displayPrecip: false,
    updateChartDisplay: function(chart) {
        if (chart === "heat") {
            store.displayHeat = true;
            store.displayPrecip = false;
        }

        if (chart === "precip") {
            store.displayPrecip = true;
            store.displayHeat = false;
        }
    }
});