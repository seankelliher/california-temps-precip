import {setGetLocalStorage} from "./s4-store.js";

async function formCharts() {
    const {
        bfieldPrcpLoc,
        bfieldTempLoc,
        eurekaPrcpLoc,
        eurekaTempLoc,
        fresnoPrcpLoc,
        fresnoTempLoc,
        laPrcpLoc,
        laTempLoc,
        sdPrcpLoc,
        sdTempLoc,
        stktonPrcpLoc,
        stktonTempLoc
    } = await setGetLocalStorage();

    //Labels, displayed on the x-axis.
    const labels = [
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020"
    ];


    //The data for each state.
    //Numbers on the y-axis are automaticlaly generted by chart.js.
    const dataTemp = {
        labels: labels,
        datasets: [{
            label: "San Diego",
            backgroundColor: "#039BE5", //light blue 600.
            borderColor: "#039BE5",
            tension: 0.1,
            data: sdTempLoc
        },
        {
            label: "Los Angeles",
            backgroundColor: "#E53935", //red 600.
            borderColor: "#E53935",
            tension: 0.1,
            data: laTempLoc
        },
        {
            label: "Bakersfield",
            backgroundColor: "#7CB342", //light green 600.
            borderColor: "#7CB342",
            tension: 0.1,
            data: bfieldTempLoc
        },
        {
            label: "Fresno",
            backgroundColor: "#FFB300", //amber 600.
            borderColor: "#FFB300",
            tension: 0.1,
            data: fresnoTempLoc
        },
        {
            label: "Stockton",
            backgroundColor: "#757575", //gray 600.
            borderColor: "#757575",
            tension: 0.1,
            data: stktonTempLoc
        },
        {
            label: "Eureka",
            backgroundColor: "#8E24AA", //purple 600.
            borderColor: "#8E24AA",
            tension: 0.1,
            data: eurekaTempLoc
        }]
    };

    //The data for each state.
    //Numbers on the y-axis are automaticlaly generted by chart.js.
    const dataPrcp = {
        labels: labels,
        datasets: [{
            label: "San Diego",
            backgroundColor: "#039BE5", //light blue 600.
            borderColor: "#039BE5",
            tension: 0.1,
            data: sdPrcpLoc
        },
        {
            label: "Los Angeles",
            backgroundColor: "#E53935", //red 600.
            borderColor: "#E53935",
            tension: 0.1,
            data: laPrcpLoc
        },
        {
            label: "Bakersfield",
            backgroundColor: "#7CB342", //light green 600.
            borderColor: "#7CB342",
            tension: 0.1,
            data: bfieldPrcpLoc
        },
        {
            label: "Fresno",
            backgroundColor: "#FFB300", //amber 600.
            borderColor: "#FFB300",
            tension: 0.1,
            data: fresnoPrcpLoc
        },
        {
            label: "Stockton",
            backgroundColor: "#757575", //gray 600.
            borderColor: "#757575",
            tension: 0.1,
            data: stktonPrcpLoc
        },
        {
            label: "Eureka",
            backgroundColor: "#8E24AA", //purple 600.
            borderColor: "#8E24AA",
            tension: 0.1,
            data: eurekaPrcpLoc
        }]
    };

    //Chart.defaults.font.size = 14;
    //Controls items like title, ticks on graph, tension on lines, etc.
    const configTemp = {
        type: "line",
        data: dataTemp,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Number of days 90 degrees F or above"
                }
            },
            scales: {
                x: {
                    ticks: {
                        //Controls what displays on x-axis.
                        //This displays "ticks" (lines) for each other year.
                        callback: function(val, index) {
                            //But displays labels every decade, 1970, 1980...
                            return index % 5 === 0 ? this.getLabelForValue(val) : "";
                        },
                        color: "#000", //Color for labels, ticks not affected.
                    }
                }
            }
        },
    };

    //Chart.defaults.font.size = 14;
    //Controls items like title, ticks on graph, tension on lines, etc.
    const configPrcp = {
        type: "line",
        data: dataPrcp,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Yearly precipitation in inches"
                }
            },
            scales: {
                x: {
                    ticks: {
                        //Controls what displays on x-axis.
                        //This displays "ticks" (lines) for each other year.
                        callback: function(val, index) {
                            //But displays labels every decade, 1970, 1980...
                            return index % 5 === 0 ? this.getLabelForValue(val) : "";
                        },
                        color: "#000", //Color for labels, ticks not affected.
                    }
                }
            }
        },
    };

    const tempChart = new Chart(
        document.getElementById("temp-chart"),
        configTemp
    );
    const prcpChart = new Chart(
        document.getElementById("prcp-chart"),
        configPrcp
    );
}

export {formCharts};