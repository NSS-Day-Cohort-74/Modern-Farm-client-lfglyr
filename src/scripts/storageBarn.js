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
            return (storageBarn.length === 0)
        },

    }
}






