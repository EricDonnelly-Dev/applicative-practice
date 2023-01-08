import { data } from "../data/data";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
  const ast = data.asteroids;

  const discoveredAst = ast.filter((a)=>{
      return a.discoveryYear > year
  })
    const names = [];
  names.push(discoveredAst[0].name);
  names.push(discoveredAst[1].name);
  names.push(discoveredAst[2].name);
  names.push(discoveredAst[3].name);
  names.push(discoveredAst[4].name);
  names.push(discoveredAst[5].name);
  return names;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
