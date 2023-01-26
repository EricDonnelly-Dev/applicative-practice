// see e16.md

export function find(array, callback) {
    for (const arrayElement of array) {
        if (callback(arrayElement)){return arrayElement;}
    }
}
