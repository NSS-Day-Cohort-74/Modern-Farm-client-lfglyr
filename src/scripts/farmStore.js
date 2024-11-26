// const farmStoreInventory = []

// export const farmStore = (processedGood) => {
//     farmStoreInventory.push(processedGood)

//     return farmStoreInventory
// }

// farmStore()

export const farmStore = {
    items: [],
    push: (item) => {
        farmStore.items.push(item)
    },
    getInventory: () => {
        return farmStore.items
    }
}