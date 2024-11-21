

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
    return harvestArray
} 