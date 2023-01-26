export function minBy(array, cb) {
    if(array.length === 0 || !array){return undefined;}
    let minVal=array[0];
    for (const arrayElement of array) {
         if(cb(arrayElement)<cb(minVal)){
             minVal = arrayElement;
         }
    }
    return minVal
}

export function maxBy(array, cb) {
    if(array.length === 0 || !array){return undefined;}
    let maxVal=array[0];
    for (const arrayElement of array) {
        if(cb(arrayElement)>cb(maxVal)){
            maxVal = arrayElement;
        }
    }
    return maxVal;
}
