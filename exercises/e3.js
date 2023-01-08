import { data } from "../data/data";

// SPACE DATA EXERCISE 3
// Return an array of all Planets' average temperatures
// Return example: [1, 2, ... , N]

export function getAllAverageTemperatures(data) {
  const planetData = data.planets;
  const planetAvgTemps =[];
    planetAvgTemps.push(planetData[0].avgTemp);
    planetAvgTemps.push(planetData[1].avgTemp);
    planetAvgTemps.push(planetData[2].avgTemp);
    planetAvgTemps.push(planetData[3].avgTemp);
    planetAvgTemps.push(planetData[4].avgTemp);
    planetAvgTemps.push(planetData[5].avgTemp);
    planetAvgTemps.push(planetData[6].avgTemp);
    planetAvgTemps.push(planetData[7].avgTemp);
  return planetAvgTemps;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
