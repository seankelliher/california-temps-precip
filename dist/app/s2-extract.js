import {fetchData1, fetchData2} from "./s1-fetch.js";

async function extractResults() {

    const {data1} = await fetchData1();
    const {data2} = await fetchData2();

    // Extract individual arrays from response.
    const result0 = data1[0].results;
    const result1 = data1[1].results;
    const result2 = data1[2].results;
    const result3 = data1[3].results;
    const result4 = data1[4].results;
    const result5 = data2.results;

    // Combine them into one array.
    const results = [
        ...result0,
        ...result1,
        ...result2,
        ...result3,
        ...result4,
        ...result5
    ];
    return {
        results
    };
}

export {extractResults};