import {fetchData} from "./s1-fetch.js";

async function extractResults() {

    const {data} = await fetchData();

    //Extract individual arrays from response.
    const result0 = data[0].results;
    const result1 = data[1].results;
    const result2 = data[2].results;
    const result3 = data[3].results;
    const result4 = data[4].results;
    //const result5 = data[5].results;

    //Combine them into one array.
    const results = [
        ...result0,
        ...result1,
        ...result2,
        ...result3,
        ...result4
        //...result5 comma above.
    ];
    return {
        results
    };
}

export {extractResults};