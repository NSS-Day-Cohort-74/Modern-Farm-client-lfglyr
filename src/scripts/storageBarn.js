let storageBarn = []

export const barn = () => {
    return {
        push: (crop) => {
            storageBarn.push(crop)
        },
        pop: () => {
            return storageBarn.pop()
        },
        peek: () => {
            return storageBarn[storageBarn.length - 1].type
        },
        isEmpty: () => {
            let empty = true
            if (storageBarn.length != 0) {
                empty = false
            }
            return empty
        },

    }
}






