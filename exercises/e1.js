import { data } from "../data/data";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetNames(data) {
  const planets=data.planets;
  const planetNames=[];
  // planetNames.push(planets[0].name);
  // planetNames.push(planets[1].name);
  // planetNames.push(planets[2].name);
  // planetNames.push(planets[3].name);
  // planetNames.push(planets[4].name);
  // planetNames.push(planets[5].name);
  // planetNames.push(planets[6].name);
  // planetNames.push(planets[7].name);
  // Refactored this to use a for statement to remain DRY
  for (const planet of planets) {
   planetNames.push(planet.name)
  }
  return planetNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
