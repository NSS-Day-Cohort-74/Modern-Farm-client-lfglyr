
//empty array
const growingInFieldArray = []
//adds seed objects to growingInFieldArray
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const plantObj of seedObject) {
            growingInFieldArray.push(plantObj)
        }
    } else {
        growingInFieldArray.push(seedObject)
    }

}

//return copy of array
export const usePlants = () => {
    const growingInFieldCopy = growingInFieldArray.map((seed) => (seed)) //may not work
    return growingInFieldCopy
}