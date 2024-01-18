[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/california-temps-precip?style=flat-square)](/LICENSE.txt)
## California Temperatures & Precipitation

Charts that display information on precipitation and temperatures in six cities in California, 1970 - 2020. The cities are San Diego, Los Angeles, Bakersfield, Fresno, Stockton, and Eureka. These sites were chosen because they represent different regions of California, and had complete data. Built with Vue.js and Chart.js. [View working component](https://california-temps-precip-51abd5847179.herokuapp.com). **"Eco" dyno, takes a few seconds to wake up.** 

## Project Status

Next steps, I want to do more extensive accessibility and browser testing.

## Project Screen Shots

* Chart 1 - days 90 degrees F / 32.2 degrees C or above.
![screen shot of project](/screenshots/california-temps-precip-screenshot1.png?s=600)

* Chart 2 - annual precipitation in inches.
![screen shot of project](/screenshots/california-temps-precip-screenshot2.png?s=600)

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

## Reflection

I wanted to build several charts that examined precipitation and heat in California over the past five decades. This involved a number of challenges. Finding what data NOAA keeps took time. Finding complete data was also difficult. Few stations had complete data for the past 50 years. Next, I needed to learn NOAA's API and how Chart.js worked. This was okay. Both had decent documentation, but much testing was still required to figure out details.

## Acknowledgments

* Weather data from the [National Centers for Environmental Information](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4), part of the National Oceanic and Atmospheric Administration (NOAA).
* Chart built with [Chart.js](https://www.chartjs.org/docs/latest/).
* Helpful Chart.js example, by diggidydoge on [Codepen](https://codepen.io/diggitydoge/pen/MWWmgJp?__cf_chl_captcha_tk__=0p_9xAp805KWSEbmYe2FWoI8MrlpQUN_VncDcE8VenI-1637378794-0-gaNycGzNB30).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design).
* Shields from [Shields](https://shields.io).