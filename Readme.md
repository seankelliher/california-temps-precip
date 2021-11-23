[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/california-temps-precip?style=flat-square)](/LICENSE.txt)
## California Temperatures & Precipitation

Charts that display information on precipitation and temperatures in California cities, 1970 - 2020. The cities are San Diego, Los Angelos, Bakersfield, Fresno, Stockton, and Eureka. These sites were chosen because they had complete data, and represent different regions of California. The charts were built with Chart.js 3.5.1. The data is from the National Centers for Environmental Information, part of the National Oceanic and Atmospheric Administration (NOAA).

## Project Status

This project is currently in development.

## Project Screen Shot(s)

Content to come...

## Installation and Setup Instructions

This chart is built with `chart.js`. You will either need to install the program locally or link to it. Please see the 
[Installation](https://www.chartjs.org/docs/latest/getting-started/installation.html) on Chart.js's website for options and instructions.

## Reflection

I wanted to build several charts that examined precipitation and heat in California over the past five decades. First, NOAA is a giant administration with huge archives of information. Understanding how NOAA is structured, what records are kept, and how that information can be accessed took time. Finding complete data was hard too. NOAA has lots of stations that monitor weather conditions, but many either were not in existence during the time period I needed, or they were in existence but the records were incomplete. Next, I needed to learn NOAA's API and how Chart.js worked. This was okay. Both had decent documentation, but much testing was still required to figure out details.

When I began building, I could succesfully fetch the data and build the chart, but not without refreshing the page. This would not fly in the real world. My mix of asynchronus and synchrous functions was a mess. I needed clarity.

I found it easiest to break things down, put all JavaScript in one file, and methodically build a chain so a function called the one before it, waited for its results, and then consumed them. Once this was working, I divided the very long JavaScript file into smaller, easier to comprehend modules, each focused on a single task.

## Acknowledgments

* Weather data from the [National Centers for Environmental Information](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4), part of the National Oceanic and Atmospheric Administration (NOAA).
* Chart built with [Chart.js](https://www.chartjs.org/docs/latest/).
* Helpful Chart.js example, Cryptocurrency Price Charts with API data and Chart.js on [Codepen](https://codepen.io/diggitydoge/pen/MWWmgJp?__cf_chl_captcha_tk__=0p_9xAp805KWSEbmYe2FWoI8MrlpQUN_VncDcE8VenI-1637378794-0-gaNycGzNB30).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).