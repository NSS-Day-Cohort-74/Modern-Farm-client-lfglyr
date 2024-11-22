

//returns array of objects
export const harvestPlants = (seedsInFieldArray) => {
    const harvestArray = []
    // iterate through seedsInFIeldArray, get the output property value of each seedObject
    // output property determines number of plant objects to push to harvestArray (duplicate)
    // CORN IS THE EXCEPTION -- no matter the output property, only one corn object gets added to harvestArray

    for (const seedObject of seedsInFieldArray) {
        if (seedObject.type === "Corn") {
            for (let i = 0; i < seedObject.output / 2; i++)
                harvestArray.push(seedObject)
        } else {
            for (let i = 0; i < seedObject.output; i++) {
                harvestArray.push(seedObject)
            }
        }
    }
    // in harvestArray itterating through objects and setting them to a and b. First itteration object index 0 would be a, index 1 would be b
    // then we use localC

    // USING .localeCompare()
    // if a's letter comes before b's letter in the alphabet, return -1 (ex. "apple".localeCompare("bannana"))
    // if a's letter after b's letter in the alphabet, return 1 (ex. "bannana".localeCompare("apple"))
    // if a's letter and b's letter is the same in the alphabet, return 0 (ex. "apple".localeCompare("apple"))
    
    // const sortedHarvestArray = harvestArray.sort(
    //     (a, b) => a.type.localeCompare(b.type) //callback function for .sort(), returns value based on which argument comes first
    // ) 
    
    // without using .localeCompare()
    const sortedHarvestArray = harvestArray.sort(
        (a, b) => {
            if (a.type.toLowerCase() > b.type.toLowerCase()){
                return 1
            } else {
                return -1
            }
        }
    )
    
    return sortedHarvestArray

    
    // sort uses a callback function to determine proper order of a, b. .sort expects a number: -1, 0, 1
    // callback function: (a, b) => a.type.localeCompare(b.type)   
                //        ( cornObject, asparagusObject) => "Corn".localeCompare("Asparagus")
                //                                                .localeCompare() returns a number. 
                //                                                 Negative if a comes before b, 0 if a === b, 
                //                                                   positive if a comes after b
                //                                      => Corn > Asparagus 
                //                                         returns positive number
                // .sort(1) pushes b, a || Asparagus, Corn
   
    /*
    *** arrayToBeSorted.sort() FUNCTION DEFINITION ***
    const sort = (arrayToBeSorted, callBackfunction(a,b)) => {
        newArray = []
        for ([a, b] of arrayToBeSorted)
            if (callbackFunction(a, b) <= 0 ){
                newArray.push(a, b)
            } else if (callbackFunction(a, b) > 0 ) {
                newArray.push(b, a) 
        }
        return newArray
    }
    */
} 