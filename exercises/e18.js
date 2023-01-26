import { data } from "../data/data";
import {maxBy ,minBy} from "./e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
    function findMax(obj) {
        let arrayOfKeys = Object.keys(obj);
        let arrayOfValues = Object.values(obj);
        let maxValue = 0;
        let maxYear = "";
        for (let i=0; i<arrayOfKeys.length; i++) {
            if (arrayOfValues[i]> maxValue) {
                maxValue = arrayOfValues[i];
                maxYear = arrayOfKeys[i];
            }
        }
        return parseInt(maxYear);
    }
    const listByYear = data.asteroids.reduce((allAsteroids, asteroid) => {
        const currCount = allAsteroids[asteroid.discoveryYear] ?? 0;
        return {
            ...allAsteroids, [asteroid.discoveryYear]: currCount + 1,
        };
    }, {})
    return findMax(listByYear);

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
