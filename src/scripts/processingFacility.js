// [cornObject, asparagusObject, soybeanObject]

export const processor = (foodObject) => {
    const processedGoodsList = {
        "Soybean": "Bean Paste",
        "Corn": "Corn meal",
        "Sunflower": "Sunflower Oil",
        "Asparagus": "Pickled Asparagus",
        "Wheat": "Flour",
        "Potato": "Potato Chips"
    }

    return processedGoodsList[foodObject.type]
}



// The conveyor belt queue can only hold 3 items at a time.
// The conveyor belt queue must always have at least 1 item on it until the storage barn has been emptied.
// The processing facility will start processing as soon as the conveyor belt is full.
// When an item is removed from the queue the corresponding processed good will be added to the Farm Store (see table below).
// Once all crops have been removed from the Storage Barn and added to the queue, use console.log() to display the message "Storage Barn is ready for new crops"
// Once all crops have been processed, use console.log() to display the message "Farm Store inventory is full and ready to open for business"