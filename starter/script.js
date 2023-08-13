// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*

// const x = 23;

// if (x === 23);

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1991));
// console.log("The Terminal is working");

/* PROBLEM:
// We work for a company building a smart home thermometer. 
our most recent task is this: "Given an array of temprature amplitude. keep in mind
that sometimes there might be a sensor error."


//PROBLEM:
//We work for a company building a samrt home thermometer. Our 
most recent task is this: "Given an array of temperatires of one day, caculate the 
temperature amplitude.Keep in mind that sometimes there might be a sensor error ."




const Temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Understand the problem
// - what is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - what's a sensor error and what to do when one occurs?

// 2) Breaking up into sub-problems
// - how to igonre the errors
// -  how to identify max value
// - how to identify min value
// - how to subtract min from max (amplitude) and return it

const calTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp; // If the current value is greater than maximum, then that values should be the maximum
    if (curTemp < min) min = curTemp; // If the current value is greater than minimum, then that values should be the minimum.
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calTempAmplitude(Temperature);
console.log(amplitude);

calTempAmplitude([3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]);

//PROBLEM 2:
//FUNCTION should now Receive 2 arrays of temps

// 1) Understanding the problem
// - with 2 arrays, shoule we implement functionality twice? NO! just merge two arrays

//2) Breaking up into sub-problems
// - Merge 2 arrays

const calTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp; // If the current value is greater than maximum, then that values should be the maximum
    if (curTemp < min) min = curTemp; // If the current value is greater than minimum, then that values should be the minimum.
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//calTempAmplitudeNew([3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]);


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX THE BUG
    //value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  //
  console.log(measurement);

  //B) FIND THE BUG
  console.table(measurement);

  // console.warn(measurement.value);
  // console.error(measurement.value);

  const Kelvin = measurement.value + 273;
  return Kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());

//USING A DEBUGGER
const calTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    debugger;
    if (curTemp > max) max = curTemp; // If the current value is greater than maximum, then that values should be the maximum
    if (curTemp < min) min = curTemp; // If the current value is greater than minimum, then that values should be the minimum.
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

//IDENTIFY THE BUG
console.log(amplitudeBug);

//calTempAmplitudeBug([3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]);

Example: [ 17, 21, 23] will print " ... 17°c in 1 days ... 21°c ... 23°c in 3 days ..." 

create a function 'printForecast' which takes in an array 'array' and logs a string like the above to the 
console 

use the problem-solving framework: Understand the 
Problem and break it up into sub-problems! 

TEST DATA 1: [ 17, 21, 23]
TEST DATA 2: [ 12, 5, -5, 0, 4]


// 1) Understanding the problem
// - Array Transformed to string, seperated by ...
// - what is the X days? Answer: index +1

//2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// -  strings needs to contain day ( index +1)
// - Add  ...  between elements and start and end of string
// - Log String to console
 
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ... `);

const printForecast = function (arr) {
  let str = " ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days `;
  }
  console.log("... " + str);
};
printForecast(data1);
