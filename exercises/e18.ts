// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  /*
    1. Temporary array of objects: {year, incidence}
    2. if asteroid.year === arr.year, then increase incidence
    3. return value with highest incidence 
    */
  type TGreatestYear = {
    year: number;
    incidence: number;
  };
  const greatestYear: { r }[] = [];
  asteroids.map((asteroid) => {});
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
