export const conveyorBelt = {
    items: [],
    enqueue: (crop) => {
        //A function that accepts a crop that was removed from the storage barn as a parameter and adds it to the conveyor belt headed into the processing facility.,
        if (conveyorBelt.items.length < 3) {
            conveyorBelt.items.push(crop)
        }
    },
    dequeue: () => {
        //A function that accepts no parameters and returns the next crop on the conveyor belt to be processed. That crop is removed from the queue.,
        return conveyorBelt.items.shift();
    },
    next: () => {
        //A function that returns the name of the next crop that will be processed, but does not remove it from the conveyor belt. ,
        return conveyorBelt.items[0].type
    },
    last: () => {
        //A function that returns the name of the last crop that was added to the conveyor belt.,
        return conveyorBelt.items[conveyorBelt.items.length - 1].type
    },
    isEmpty: () => {
        //A function that return a boolean. True if there are no crops on the conveyor belt. False if there are crops on the conveyor belt.,
        return conveyorBelt.items.length === 0
    },
    size: () => {
        //A function that returns an integer representing the number of items currently on the conveyor belt. ,
        return conveyorBelt.items.length
    }
}
