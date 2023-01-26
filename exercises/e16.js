// see e16.md

export function find(array, callback) {
    let found;

    for (const arrayElement of array) {
        if (callback(arrayElement)){
            found = arrayElement;
            break;
        }
    }
    return found
}
