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

export const Catalog = (goodsArray) => {


    let plantHTML = ""

    // CHALLENGE: REPLACE TYPES WITH EMOJI 
    // Use an object to store plant types as keys and emoji as values
    // Use Key value pairs to access proper plants

    for (const plant of goodsArray) {
        if (typeof plant === 'object') {
            const plantType = plant.type.toLowerCase()
            plantHTML += `<section class="plant-type">${plantEmojis[plantType]}</section>`
        } else {
            plantHTML += `<section class="plant-type">${plant}</section>`

        }

    }


    // CHALLENGE: DISPLAY PLANT QUANTITY 

    // count objects and put into plantCount object
    // if not in plantCount object, add new property with value of one
    // if in plantCount, increment value by one.

    // BUILD OUT TABLE OF RAW GOOD TOTALs
    if (typeof goodsArray[0] === 'object') {
        const plantCount = {} // will hold counts of plants

        for (const plantObject of goodsArray) {

            const plantType = plantObject.type.toLowerCase() // grab the plant type and convert to lowercase

            if (plantCount.hasOwnProperty(plantType)) {
                plantCount[plantType] += 1
            } else {
                plantCount[plantType] = 1
            }
        }

        // Build Table HTML after plant display
        plantHTML += `
        <div class="plant-table">
            <table>
                <tr>
                    <th>Food</th>
                    <th>Quantity</th>
                </tr>`

        // iterate through plantCount object
        for (const key in plantCount) {
            plantHTML += `
            <tr>
                <td>${key}</td>
                <td>${plantCount[key]}</td>
            </tr>
        `
        }

        plantHTML += `
                </table>
            </div>
        `

    }


    return plantHTML
}