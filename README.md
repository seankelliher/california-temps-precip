[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/california-temps-precip?style=flat-square)](/LICENSE.txt)
## California Temperatures & Precipitation

Dynamically generated charts that display historical weather data from six locations across California. The interface utilizes NOAA's API to 50 years of weather data. It then sorts and compiles the data into statistics and populates a chart with them. The first chart displays the number of days each year with temperature over 90 degrees F. The second chart displays annual precipitation in inches. Built with Vue.js and Express.js. The Express server is used mainly to hide the API's access token in an environmental variable. Fetched data is stored locally to reduce calls to the server. [View working component](https://california-temps-precip-51abd5847179.herokuapp.com). **"Eco" dyno, takes a few seconds to wake up.** 

## Project Status

Project meets general accessibility (WACG) and cross-browser requirements. More testing with a dedicated services (e.g., Sauce Labs) would be helpful if deploying to production.

## Project Screen Shots

* Opening screen
![screen shot of project](/screenshots/california-temps-precip-screenshot1.png?s=600)

* Intro text and locations map
![screen shot of project](/screenshots/california-temps-precip-screenshot2.png?s=600)

* Precipitation chart
![screen shot of project](/screenshots/california-temps-precip-screenshot3.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. The Express server uses the Fetch API. You will need a later version of Node (18+) for this to work. 

Installation:

`npm install`  

To Run Vue:

`npm run dev`  

To Start the Express server:

`npm run start`  

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`. You may need to disable your browser's Cross-Origin Restrictions.

## Acknowledgments

* Weather data from the [National Centers for Environmental Information](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4), part of the National Oceanic and Atmospheric Administration (NOAA).
* Photo of Big Sur, California [Robson Hatsukami Morgan](https://commons.wikimedia.org/wiki/File:Winding_road_near_the_seaside_in_Big_Sur_(Unsplash).jpg).
* Map from [Mapbox](https://docs.mapbox.com/playground/static/).
* Chart built with [Chart.js](https://www.chartjs.org/docs/latest/).
* Helpful Chart.js example, by diggidydoge on [Codepen](https://codepen.io/diggitydoge/pen/MWWmgJp?__cf_chl_captcha_tk__=0p_9xAp805KWSEbmYe2FWoI8MrlpQUN_VncDcE8VenI-1637378794-0-gaNycGzNB30).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design).
* Shields from [Shields](https://shields.io).