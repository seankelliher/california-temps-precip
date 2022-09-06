[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/california-temps-precip?style=flat-square)](/LICENSE.txt)
## California Temperatures & Precipitation

Charts that display information on precipitation and temperatures in six cities in California, 1970 - 2020. The cities are San Diego, Los Angeles, Bakersfield, Fresno, Stockton, and Eureka. These sites were chosen because they represent different regions of California, and had complete data.

## Project Screen Shot(s)

* Chart 1 - days 90 degrees F or above.
![screen shot of project](/screenshots/california-temps-precip-screenshot1.png?s=600)

* Chart 2 - annual precipitation in inches.
![screen shot of project](/screenshots/california-temps-precip-screenshot2.png?s=600)

## Installation and Setup Instructions

This chart is built with `chart.js`. You will either need to install the program locally or link to it. I link to it in the `index.html` file. Please see [Installation](https://www.chartjs.org/docs/latest/getting-started/installation.html) on Chart.js's website for options and instructions.

You will also need to add a valid NOAA token to fetch data from NOAA. In the `app/s1-fetch.js`file, add your token in the TWO places you see the "ADD-YOUR-NOAA-TOKEN-HERE" note.

Lastly, this component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

I wanted to build several charts that examined precipitation and heat in California over the past five decades. This involved a number of challenges.

Finding what data NOAA keeps took time. Finding complete data was also difficult. Few stations had complete data for the past 50 years.

Next, I needed to learn NOAA's API and how Chart.js worked. This was okay. Both had decent documentation, but much testing was still required to figure out details.

When I began building, I could successfully fetch data and build a chart, but not seamlessly. I needed to keep refreshing the page. This would not fly in the real world. My mix of asynchronous and synchronous functions was a mess. I needed clarity.

I found it easiest to break things down, put all JavaScript in one file, and methodically build a chain so a function called the one before it, waited for its results, and then consumed them. Once this was working, I divided the very long JavaScript file into smaller, easier to comprehend modules, each focused on a single task.

I experimented with numerous NPM packages such as p-limit, p-throttle, and bottleneck to work around rate limits with NOAA's API. I had trouble implementing these packages, and decided to just write my own JavaScript functions to comply with NOAA's rate limits.

## Acknowledgments

* Weather data from the [National Centers for Environmental Information](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4), part of the National Oceanic and Atmospheric Administration (NOAA).
* Chart built with [Chart.js](https://www.chartjs.org/docs/latest/).
* Helpful Chart.js example, by diggidydoge on [Codepen](https://codepen.io/diggitydoge/pen/MWWmgJp?__cf_chl_captcha_tk__=0p_9xAp805KWSEbmYe2FWoI8MrlpQUN_VncDcE8VenI-1637378794-0-gaNycGzNB30).
* Helpful example of using "sleep" function in JavaScript from Dan Dascalescu on [Stackoverflow](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com).
* Design guidance from Google's [Material Design](https://material.io/design).
* Shields from [Shields](https://shields.io).