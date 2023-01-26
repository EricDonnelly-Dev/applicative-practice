export function minBy(array, cb) {
    let minVal=99999999;
    let returnVal;
    for (const arrayElement of array) {
         if(cb(arrayElement)<minVal){
             minVal = cb(arrayElement);
             returnVal = arrayElement;
         }
    }
    if(array.length === 0 || !array){
        returnVal= undefined;
    }
    return returnVal;
}

export function maxBy(array, cb) {
    let maxVal=0;
    let returnVal;
    for (const arrayElement of array) {
        if(cb(arrayElement)>maxVal){
            maxVal = cb(arrayElement);
            returnVal = arrayElement;
        }
    }
    if(array.length === 0 || !array){
        returnVal= undefined;
    }
    return returnVal;
}
