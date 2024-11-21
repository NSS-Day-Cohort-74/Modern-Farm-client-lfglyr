//create a <main> class of container in index.html
//make catalog function
//harvested food is argument
//iterate and convert to HTML

export const Catalog = (harvestedPlantArray) => {
    let plantHTML = ""
    for (const plant of harvestedPlantArray) {
        plantHTML += `<section class="plant-type">${plant.type}</section>`
    }
    return plantHTML
}