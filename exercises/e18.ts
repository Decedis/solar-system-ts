// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  let counter = 1;
  const yearData: number[] = [];
  const greatestDiscoveryYear: { year: number; count: number }[] = [];

  asteroids.map((asteroid) => yearData.push(asteroid.discoveryYear));
  yearData.sort();
  for (let i = 0; i < yearData.length; i++) {
    if (yearData[i] === yearData[i + 1]) {
      counter++;
    } else if (yearData[i] !== yearData[i + 1]) {
      greatestDiscoveryYear.push({
        year: yearData[i]!,
        count: counter,
      });
      counter = 1;
    }
  }

  let greatestYear = maxBy(greatestDiscoveryYear, (year) => year.count);
  return greatestYear?.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
