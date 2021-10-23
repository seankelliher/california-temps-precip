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
    "2020",
];

//The data for each state.
//Numbers on the y-axis are automaticlaly generted by chart.js.
const dataTemp = {
    labels: labels,
    datasets: [{
        label: "California",
        backgroundColor: "#039BE5", //light blue 600.
        borderColor: "#039BE5",
        tension: 0.1,
        data: [5.5, 12.4, 18.5, 16.0, 20.4, 18.5, 6.5, 23.5, 23.4, 19.2]
    },
    {
        label: "Colorado",
        backgroundColor: "#E53935", //red 600.
        borderColor: "#E53935",
        tension: 0.1,
        data: [3.5, 14.4, 13.5, 14.0, 23.4, 13.5, 16.5, 21.5, 17.4, 12.2]
    },
    {
        label: "Idaho",
        backgroundColor: "#7CB342", //light green 600.
        borderColor: "#7CB342",
        tension: 0.1,
        data: [3.5, 13.4, 12.5, 11.0, 9.4, 12.5, 3.5, 21.5, 24.4, 11.2]
    },
    {
        label: "Montana",
        backgroundColor: "#FFB300", //amber 600.
        borderColor: "#FFB300",
        tension: 0.1,
        data: [4.5, 13.4, 13.5, 9.0, 23.4, 13.5, 16.5, 19.5, 21.4, 22.2]
    },
    {
        label: "Nevada",
        backgroundColor: "#757575", //gray 600.
        borderColor: "#757575",
        tension: 0.1,
        data: [3.5, 14.4, 13.5, 14.0, 12.4, 16.5, 16.5, 17.5, 21.4, 12.2]
    },
    {
        label: "Oregon",
        backgroundColor: "#8E24AA", //purple 600.
        borderColor: "#8E24AA",
        tension: 0.1,
        data: [15.5, 14.4, 20.5, 16.0, 24.4, 13.5, 16.5, 21.5, 17.4, 15.2]
    },
    {
        label: "Utah",
        backgroundColor: "#C0CA33", //lime 600.
        borderColor: "#C0CA33",
        tension: 0.1,
        data: [12.5, 15.4, 15.5, 9.0, 21.4, 17.5, 16.5, 21.5, 16.4, 12.2]
    },
    {
        label: "Washington",
        backgroundColor: "#F4511E", //deep orange 600.
        borderColor: "#F4511E",
        tension: 0.1,
        data: [7.5, 14.4, 16.5, 12.0, 17.4, 9.5, 16.5, 21.5, 19.4, 9.2]
    },
    {
        label: "Wyoming",
        backgroundColor: "#00ACC1", //cyan 600.
        borderColor: "#00ACC1",
        tension: 0.1,
        data: [17.5, 14.4, 16.5, 20.0, 22.4, 15.5, 19.5, 21.5, 17.4, 16.2]
    }]
};

//The data for each state.
//Numbers on the y-axis are automaticlaly generted by chart.js.
const dataPrcp = {
    labels: labels,
    datasets: [{
        label: "California",
        backgroundColor: "#039BE5", //light blue 600.
        borderColor: "#039BE5",
        tension: 0.1,
        data: [3.5, 14.4, 13.5, 4.0, 23.4, 13.5, 16.5, 21.5, 17.4, 12.2]
    },
    {
        label: "Colorado",
        backgroundColor: "#E53935", //red 600.
        borderColor: "#E53935",
        tension: 0.1,
        data: [5.5, 12.4, 18.5, 16.0, 20.4, 18.5, 16.5, 23.5, 23.4, 19.2]
    },
    {
        label: "Idaho",
        backgroundColor: "#7CB342", //light green 600.
        borderColor: "#7CB342",
        tension: 0.1,
        data: [3.5, 13.4, 12.5, 10.0, 9.4, 12.5, 3.5, 21.5, 24.4, 11.2]
    },
    {
        label: "Montana",
        backgroundColor: "#FFB300", //amber 600.
        borderColor: "#FFB300",
        tension: 0.1,
        data: [3.5, 14.4, 23.5, 14.0, 12.4, 16.5, 6.5, 17.5, 21.4, 12.2]

    },
    {
        label: "Nevada",
        backgroundColor: "#757575", //gray 600.
        borderColor: "#757575",
        tension: 0.1,
        data: [4.5, 13.4, 13.5, 9.0, 23.4, 13.5, 16.5, 19.5, 21.4, 22.2]
    },
    {
        label: "Oregon",
        backgroundColor: "#8E24AA", //purple 600.
        borderColor: "#8E24AA",
        tension: 0.1,
        data: [15.5, 14.4, 20.5, 16.0, 24.4, 13.5, 16.5, 21.5, 17.4, 15.2]
    },
    {
        label: "Utah",
        backgroundColor: "#C0CA33", //lime 600.
        borderColor: "#C0CA33",
        tension: 0.1,
        data: [12.5, 15.4, 15.5, 9.0, 21.4, 17.5, 16.5, 21.5, 16.4, 12.2]
    },
    {
        label: "Washington",
        backgroundColor: "#F4511E", //deep orange 600.
        borderColor: "#F4511E",
        tension: 0.1,
        data: [7.5, 14.4, 16.5, 12.0, 17.4, 9.5, 16.5, 21.5, 19.4, 9.2]
    },
    {
        label: "Wyoming",
        backgroundColor: "#00ACC1", //cyan 600.
        borderColor: "#00ACC1",
        tension: 0.1,
        data: [17.5, 14.4, 16.5, 20.0, 22.4, 15.5, 19.5, 21.5, 17.4, 16.2]
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
                    //Controls what displays on y-axis.
                    //This displays "ticks" (lines) for each year.
                    callback: function(val, index) {
                        //But displays labels every fifth year, 1970, 1975...
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
                    //Controls what displays on y-axis.
                    //This displays "ticks" (lines) for each year.
                    callback: function(val, index) {
                        //But displays labels every fifth year, 1970, 1975...
                        return index % 5 === 0 ? this.getLabelForValue(val) : "";
                    },
                    color: "#000", //Color for labels, ticks not affected.
                }
            }
        }
    },
};

//Exports the above.
module.exports = {
    actions: [],
    config: configTemp, configPrcp
};