//create a <main> class of container in index.html
//make catalog function
//harvested food is argument
//iterate and convert to HTML

const plantEmojis = {
    asparagus: "🌿",
    corn: "🌽",
    potato: "🥔",
    soybean: "🌱",
    sunflower: "🌻",
    wheat: "🍞"
}

export const Catalog = (harvestedPlantArray) => {
    let plantHTML = ""
    for (const plant of harvestedPlantArray) {
        plantHTML += `<section class="plant-type">${plantEmojis[plant.type.toLowerCase()]}</section>`
    }
    return plantHTML
}