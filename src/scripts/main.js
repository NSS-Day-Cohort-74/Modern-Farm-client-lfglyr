import { Catalog } from "./catalog.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { processor } from "./processingFacility.js"
import { plantSeeds } from "./tractor.js"
import { barn } from "./storageBarn.js"
import { conveyorBelt } from "./conveyorBelt.js"
import { farmStore } from "./farmStore.js"


const yearlyPlan = createPlan() // returns 3 arrays with randomized crop order
plantSeeds(yearlyPlan) // send yearly plan to tractor.js
const seedsInFieldArray = usePlants() // retrieve planted field from field.js
const harvestedPlantArray = harvestPlants(seedsInFieldArray) // return array to send to Catalog

/*
Process Harvested Goods
take stuff from storage barn and put into processor, while somethere there put on belt
when processor reaches 3 objects, process item and put in the farm store (could use an object?)
check when storage barn is empty, then console.log it
when processor is empty, console.log that farm store inventory is full and ready 
*/

do {

    if (conveyorBelt.size() < 3 && !barn.isEmpty()) {
        conveyorBelt.enqueue(barn.pop())
    }

    if (barn.isEmpty()) {
        console.log("The Storage Barn is ready for new crops")
    }

    if (!conveyorBelt.isEmpty()) {
        let processedGood = processor(conveyorBelt.dequeue())
        farmStore.push(processedGood) // farm store manages inventory
    }

    if (conveyorBelt.isEmpty() && barn.isEmpty()) {
        console.log("Farm Store inventory is full and ready to open for business")
    }

} while (!barn.isEmpty());


// TOGGLE WHICH OUTPUT TO SEE:
const finalHTML = Catalog(farmStore.getInventory()) // send processed goods to the Catalog, return html
// const finalHTML = Catalog(harvestedPlantArray) // send raw plants to the Catalog, return html

const targetElement = document.querySelector(".container")
targetElement.innerHTML = finalHTML // send html to DOM


/* --------------------------------------------------------------------------- */

// PROJECT NOTES:

/*
MAIN ALGORITHM
yearlyPlan = createPlan
plantSeeds(yearlyPlan) -- tractor creates plants and puts plants into field.
fieldArrays = usePlants()
harvestedPlants = harvestPlants(fieldArrays)

catalogHTML = catalog(harvestedPlants)
send catalogHTML to DOM with .innerHTML property
*/

/*
PROJECT PROCESS NOTES:
- Take turns reading through spec documents
- Individually Draft Notes on specs
- Collectively create a dependency diagram, write main algorithm
- Work together in one live shared VS Code Instance
- Go through each spec document again and code in order
    - REMEMBER TO WRITE COMMENTS FIRST BEFORE CODE!!
- One person push changes to git repo developer branch
*/

// create a module for each seed type with functions using createCorn syntax
// soybean, corn, sunflower, asparagus, wheat, potato
// each function should return an object
// each object should have a type, height, output property.
// Corn should return an arrray with two objects with identical properties
// COMPLETED


// create a field.js module 
// define an empty array to store plants growing in field, do not export array
// export function addPlant
// addPlant accepts a seed Object as input, function adds seed to the field.
// since cornseed is an array of two corns, use isArray method to check if array to iterate and add to field array.
// Define an export function named usePlants that returns copy of array of plants
// COMPLETED


// create a tractor.js module 
// import in the plant modules, import addPlant function
// export a plantSeeds function that accepts the yearlyPlan variable as a parameter
// iterate through all arrays using nested forof loops
// as we are going through the planting plan, invoke the createAsparagus-type function to get seed.
// take seed and add to array of plants using the addPlant function from field.js
// COMPLETED

// create harvester.js
// define and export a harvestPlants function
// accepts plants array as input
// returns array of seed objects based on output property value of seedObjects in fieldArray
// COMPLETED


// create catalog.js module, export a Catalog function
// catalog function accepst the usePlants array from field.js
// iterate through array, generate HTML, return HTML to be added to the DOM.
// COMPLETED