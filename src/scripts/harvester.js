

//returns array of objects
export const harvestPlants = (seedsInFieldArray) => {
    const harvestArray = []
    // iterate through seedsInFieldArray, get the output property value of each seedObject
    // output property determines number of plant objects to push to harvestArray (duplicate)
    // CORN IS THE EXCEPTION -- no matter the output property, only one corn object gets added to harvestArray
    let id = 1;
    for (const seedObject of seedsInFieldArray) {
        if (seedObject.type === "Corn") {
            for (let i = 0; i < seedObject.output / 2; i++)
                seedObject.id = id
            id++
            harvestArray.push(seedObject)
            console.log(seedObject.id)
        } else {
            for (let i = 0; i < seedObject.output; i++) {
                seedObject.id = id
                id++
                harvestArray.push(seedObject)
                console.log(seedObject.id)
            }
        }
    }

    // SORTING OUTPUT CHALLENGE
    // .sort() iterates through an array, taking two elements, comparing them to determine if they should be swapped.
    // to determine if they should be swapped, a callback function that returns a positive or negative value is used. 
    // if callback function returns negative, swap elements.

    const sortedHarvestArray = harvestArray.sort(
        (a, b) => {
            if (a.type.toLowerCase() < b.type.toLowerCase()) { // if true, a should come before b
                return -1 // don't swap
            } else if (a.type.toLowerCase() > b.type.toLowerCase()) { // if true, a should come after b
                return 1 // swap
            } else {
                return 0 // leave as is
            }
        }
    )

    return sortedHarvestArray

    // sort uses a callback function to determine proper order of a, b. .sort expects a number: -1, 0, 1

    // callback function using localeCompare(): (a, b) => a.type.localeCompare(b.type)   
    //        ( cornObject, asparagusObject) => "Corn".localeCompare("Asparagus")
    //                                                .localeCompare() returns a number. 
    //                                                 Negative(falsy) if a comes before b, 0 if a === b, 
    //                                                 positive(truthy) if a comes after b
    //                                      => Corn > Asparagus 
    //                                         returns positive number
    // .sort()|| Asparagus, Corn

    // if a's letter comes before b's letter in the alphabet, return -1 (ex. "apple".localeCompare("bannana"))
    // if a's letter comes after b's letter in the alphabet, return 1 (ex. "bannana".localeCompare("apple"))
    // if a's letter and b's letter is the same in the alphabet, return 0 (ex. "apple".localeCompare("apple"))

    // const sortedHarvestArray = harvestArray.sort(
    //     (a, b) => a.type.localeCompare(b.type) //callback function for .sort(), returns value based on which argument comes first
    // ) 





} 