
//empty array
const growingInFieldArray = []
//adds seed objects to growingInFieldArray
export const addPlant = (seedObject) => {
    if (seedObject.isArray()) {
        for (const plantObj of seedObject) {
            growingInFieldArray.push(plantObj)
        }
    }
    growingInFieldArray.push(seedObject)
}

//return copy of array
export const usePlants = () => {
    const growingInFieldCopy = growingInFieldArray.map((seed) => (seed)) //may not work
    return growingInFieldCopy
}