import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
    const planets = data.planets;
    const massivePlanets = planets.filter( (planet)=>{
        return planet.mass.massValue >= number
    })
    const massivePlanetNames =[];
    massivePlanetNames.push(massivePlanets[0].name);
    massivePlanetNames.push(massivePlanets[1].name);
    massivePlanetNames.push(massivePlanets[2].name);
    massivePlanetNames.push(massivePlanets[3].name);
    massivePlanetNames.push(massivePlanets[4].name);
    return massivePlanetNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
