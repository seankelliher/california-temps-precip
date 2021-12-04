import {setGetLocalStorage} from "./s4-store.js";
import {hideLoadingCircles} from "./sup-notices.js";

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
    const fiftyYears = [
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
        datasets: [{
            backgroundColor: "#039BE5", //light blue 600.
            borderColor: "#039BE5",
            data: sdTempLoc,
            label: "San Diego",
            tension: 0.1
        }, {
            backgroundColor: "#E53935", //red 600.
            borderColor: "#E53935",
            data: laTempLoc,
            label: "Los Angeles",
            tension: 0.1
        }, {
            backgroundColor: "#7CB342", //light green 600.
            borderColor: "#7CB342",
            data: bfieldTempLoc,
            label: "Bakersfield",
            tension: 0.1
        }, {
            backgroundColor: "#FFB300", //amber 600.
            borderColor: "#FFB300",
            data: fresnoTempLoc,
            label: "Fresno",
            tension: 0.1
        }, {
            backgroundColor: "#757575", //gray 600.
            borderColor: "#757575",
            data: stktonTempLoc,
            label: "Stockton",
            tension: 0.1
        }, {
            backgroundColor: "#8E24AA", //purple 600.
            borderColor: "#8E24AA",
            data: eurekaTempLoc,
            label: "Eureka",
            tension: 0.1
        }],
        labels: fiftyYears
    };

    //The data for each state.
    //Numbers on the y-axis are automaticlaly generted by chart.js.
    const dataPrcp = {
        datasets: [{
            backgroundColor: "#039BE5", //light blue 600.
            borderColor: "#039BE5",
            data: sdPrcpLoc,
            label: "San Diego",
            tension: 0.1
        }, {
            backgroundColor: "#E53935", //red 600.
            borderColor: "#E53935",
            data: laPrcpLoc,
            label: "Los Angeles",
            tension: 0.1
        }, {
            backgroundColor: "#7CB342", //light green 600.
            borderColor: "#7CB342",
            data: bfieldPrcpLoc,
            label: "Bakersfield",
            tension: 0.1
        }, {
            backgroundColor: "#FFB300", //amber 600.
            borderColor: "#FFB300",
            data: fresnoPrcpLoc,
            label: "Fresno",
            tension: 0.1
        }, {
            backgroundColor: "#757575", //gray 600.
            borderColor: "#757575",
            data: stktonPrcpLoc,
            label: "Stockton",
            tension: 0.1
        }, {
            backgroundColor: "#8E24AA", //purple 600.
            borderColor: "#8E24AA",
            data: eurekaPrcpLoc,
            label: "Eureka",
            tension: 0.1
        }],
        labels: fiftyYears
    };

    //Chart.defaults.font.size = 14;
    //Controls items like title, ticks on graph, tension on lines, etc.
    const configTemp = {
        data: dataTemp,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Number of days 90 degrees F or above"
                }
            },
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        //Controls what displays on x-axis.
                        //This displays "ticks" (lines) for each other year.
                        callback: function (val, index) {
                            //But displays labels every decade, 1970, 1980...
                            return (
                                index % 5 === 0
                                ? (this.getLabelForValue(val))
                                : ("")
                            );
                        },
                        color: "#000" //Color for labels, ticks not affected.
                    }
                }
            }
        },
        type: "line"
    };

    //Chart.defaults.font.size = 14;
    //Controls items like title, ticks on graph, tension on lines, etc.
    const configPrcp = {
        data: dataPrcp,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Yearly precipitation in inches"
                }
            },
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        //Controls what displays on x-axis.
                        //This displays "ticks" (lines) for each other year.
                        callback: function (val, index) {
                            //But displays labels every decade, 1970, 1980...
                            return (
                                index % 5 === 0
                                ? (this.getLabelForValue(val))
                                : ("")
                            );
                        },
                        color: "#000" //Color for labels, ticks not affected.
                    }
                }
            }
        },
        type: "line"
    };

    //ID's for canvas elements.
    const canvasIdTemp = document.getElementById("temp-chart");
    const canvasIdPrcp = document.getElementById("prcp-chart");

    //Create the charts.
    new window.Chart(canvasIdTemp, configTemp);
    new window.Chart(canvasIdPrcp, configPrcp);

    //Hide the loading circles.
    hideLoadingCircles();
}

export {formCharts};