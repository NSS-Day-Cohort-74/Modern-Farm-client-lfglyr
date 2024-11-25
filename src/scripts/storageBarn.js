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
            return storageBarn.peek().type
        },
        isEmpty: () => {
            return storageBarn.isEmpty()
        },

    }
}

console.log(barn.isEmpty)
barn.push("asparagus")
barn.push("asparagus")
barn.push("asparagus")
barn.push("asparagus")


