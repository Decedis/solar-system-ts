// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

import { AllData } from "../data/data";

export function getAveragePlanetsTemperature(data: AllData) {
  const tempArr: number[] = [];
  let sum = 0;
  data.planets.map((planet) => tempArr.push(planet.avgTemp));
  tempArr.forEach((temp) => {
    temp ? (sum += temp) : null;
  });
  let avg = sum / tempArr.length;
  console.log("avg: ", avg);
  return avg;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
