
export const barn = {
    items: [],
    push: (crop) => {
        barn.items.push(crop)
    },
    pop: () => {
        return barn.items.pop()
    },
    peek: () => {
        return barn.items[barn.items.length - 1].type
    },
    isEmpty: () => {
        return (barn.items.length === 0)
    },

}






