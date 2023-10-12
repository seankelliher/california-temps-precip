[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/california-temps-precip?style=flat-square)](/LICENSE.txt)
## California Temperatures & Precipitation

Charts that display information on precipitation and temperatures in six cities in California, 1970 - 2020. The cities are San Diego, Los Angeles, Bakersfield, Fresno, Stockton, and Eureka. These sites were chosen because they represent different regions of California, and had complete data.

## Project Status

Next steps, accessibility and browser testing. Deploy project to server without NOAA token displaying.

## Project Screen Shots

* Chart 1 - days 90 degrees F or above.
![screen shot of project](/screenshots/california-temps-precip-screenshot1.png?s=600)

* Chart 2 - annual precipitation in inches.
![screen shot of project](/screenshots/california-temps-precip-screenshot2.png?s=600)

## Installation and Setup Instructions

This is a static component. Simply open the `index.html` file in your browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

The component also uses `chart.js`. You will either need to install the program locally or link to it. I link to it in the `index.html` file. Please see [Installation](https://www.chartjs.org/docs/latest/getting-started/installation.html) on Chart.js's website for options and instructions.

You will also need to add a valid NOAA token to fetch data from NOAA. In the `app/s1-fetch.js`file, add your token in the **two places** you see the "ADD-YOUR-NOAA-TOKEN-HERE" note.

**A word of caution** - If you put these files on a server, your token can be read by people using a browser's developer tools. If using this in production, moving the "fetch" operation to the server is a safer bet.

## Reflection

I wanted to build several charts that examined precipitation and heat in California over the past five decades. This involved a number of challenges.

Finding what data NOAA keeps took time. Finding complete data was also difficult. Few stations had complete data for the past 50 years.

Next, I needed to learn NOAA's API and how Chart.js worked. This was okay. Both had decent documentation, but much testing was still required to figure out details.

I found it easiest to put all JavaScript in one file at first, and then methodically break it down into smaller modules that each handle a specific task.

I experimented with numerous NPM packages such as p-limit, p-throttle, and bottleneck to work around rate limits with NOAA's API. I had trouble implementing these packages, and decided to just write my own JavaScript functions to comply with NOAA's rate limits.

## Acknowledgments

* Weather data from the [National Centers for Environmental Information](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4), part of the National Oceanic and Atmospheric Administration (NOAA).
* Chart built with [Chart.js](https://www.chartjs.org/docs/latest/).
* Helpful Chart.js example, by diggidydoge on [Codepen](https://codepen.io/diggitydoge/pen/MWWmgJp?__cf_chl_captcha_tk__=0p_9xAp805KWSEbmYe2FWoI8MrlpQUN_VncDcE8VenI-1637378794-0-gaNycGzNB30).
* Helpful example of using "sleep" function in JavaScript from Dan Dascalescu on [Stackoverflow](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design).
* Shields from [Shields](https://shields.io).
