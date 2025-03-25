[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/california-temps-precip?style=flat-square)](/LICENSE.txt)
## California Temperatures & Precipitation

Interactive scatter plots that display 50 years of weather data from six locations across California: (1) the number of days with maximum temperature greater than 90 degrees Fahrenheit, and (2) the annual precipitation in inches. Built with Vue.js, Chart.js, and Mapbox. [View working component](https://sean-kelliher-california-temps-precip.netlify.app).

## Project Status

Project meets general accessibility (WACG) and cross-browser requirements. More testing with a dedicated services (e.g., Sauce Labs) would be helpful if deploying to production.

## About NOAA's API
Originally, I built this app to fetch data from NOAA using the agency’s API. But, the API was not always reliable and repeatedly fetching historical data that would never change seemed foolish. I rebuilt the app, storing NOAA's data locally.

## Project Screen Shots

* Opening screen
![screen shot of project](/screenshots/california-temps-precip-screenshot1.png?s=600)

* About project, weather station photos
![screen shot of project](/screenshots/california-temps-precip-screenshot2.png?s=600)

* Map, stations in California
![screen shot of project](/screenshots/california-temps-precip-screenshot3.png?s=600)

* Heat scatter plot
![screen shot of project](/screenshots/california-temps-precip-screenshot4.png?s=600)

* On smaller screens, the scatter plot becomes unreadable and is replaced by a table
![screen shot of project](/screenshots/california-temps-precip-screenshot5.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. 

Installation:

`npm install`  

To Run Vue:

`npm run dev` 

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Acknowledgments

* Weather data from the [National Centers for Environmental Information](https://www.ncei.noaa.gov/access/search/data-search/global-summary-of-the-year), part of the National Oceanic and Atmospheric Administration (NOAA).
* Photo of Malibu surfer [Terrell Woods](https://commons.wikimedia.org/wiki/File:Malibu_surfer_at_sea_(Unsplash).jpg).
* Photos of weather stations from NOAA. See details at [noaa-stations-images.txt](https://github.com/seankelliher/california-temps-precip/blob/main/notes/noaa-stations-images.txt).
* Map from [Mapbox](https://docs.mapbox.com/playground/static/).
* Scatter plots built with [Chart.js](https://www.chartjs.org/docs/latest/).
* Helpful Chart.js example, by diggidydoge on [Codepen](https://codepen.io/diggitydoge/pen/MWWmgJp?__cf_chl_captcha_tk__=0p_9xAp805KWSEbmYe2FWoI8MrlpQUN_VncDcE8VenI-1637378794-0-gaNycGzNB30).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from [ColorBrewer](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3).
* Design guidance from Google's [Material Design](https://material.io/design).
* Fonts from [Google Fonts](https://fonts.google.com).
* Fluid typography guidance from [Utopia](https://utopia.fyi).
* Shields from [Shields](https://shields.io).