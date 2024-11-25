let conveyorBeltArray = []
// [cornObject, asparagusObject, soybeanObject]


export const processor = () => {
    return {
        enqueue: (crop) => {
            //A function that accepts a crop that was removed from the storage barn as a parameter and adds it to the conveyor belt headed into the processing facility.,
            conveyorBeltArray.push(crop)
        },
        dequeue: () => {
            //A function that accepts no parameters and returns the next crop on the conveyor belt to be processed. That crop is removed from the queue.,
            return conveyorBeltArray.shift();
        },
        next: () => {
            //A function that returns the name of the next crop that will be processed, but does not remove it from the conveyor belt. ,
            return conveyorBeltArray[0].type
        },
        last: () => {
            //A function that returns the name of the last crop that was added to the conveyor belt.,
            return conveyorBeltArray[conveyorBeltArray.length - 1].type
        },
        isEmpty: () => {
            //A function that return a boolean. True if there are no crops on the conveyor belt. False if there are crops on the conveyor belt.,
            return (conveyorBeltArray.length === 0)
        },
        size: () => {
            //A function that returns an integer representing the number of items currently on the conveyor belt. ,
            return conveyorBeltArray.length
        }
    }
}



// The conveyor belt queue can only hold 3 items at a time.
// The conveyor belt queue must always have at least 1 item on it until the storage barn has been emptied.
// The processing facility will start processing as soon as the conveyor belt is full.
// When an item is removed from the queue the corresponding processed good will be added to the Farm Store (see table below).
// Once all crops have been removed from the Storage Barn and added to the queue, use console.log() to display the message "Storage Barn is ready for new crops"
// Once all crops have been processed, use console.log() to display the message "Farm Store inventory is full and ready to open for business"