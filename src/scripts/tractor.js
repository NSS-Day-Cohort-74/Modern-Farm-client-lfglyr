//import seed Generators
import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const seedGenerators = {
    asparagus: createAsparagus,
    corn: createCorn,
    potato: createPotato,
    soybean: createSoybean,
    sunflower: createSunflower,
    wheat: createWheat
}

/*
yearlyPlan = 
    [
        [Corn", x, x," x, x, x] index 0
        [x, x, x, x, x, x]
        [x, x, x, x, x, x]
    ]
*/
// using an object lookup
export const plantSeeds = (yearlyPlan) => { //intaking yearly plan
    for (const cropRow of yearlyPlan) { //iterating yearly plan
        // cropRow = ["Corn", x, x, x, x, x] (first itteration)- index 0
        for (const seedString of cropRow) { //iterating through each row in yearlyplan
            // seedString = corn (first itteration) - index 0
            const getSeedFunctionName = seedGenerators[seedString.toLowerCase()] // get proper seed generator
            const seedToPlantObject = getSeedFunctionName() // invoke seed function, returns seed object
            addPlant(seedToPlantObject) // send seed object to field array
        }
    }
}

// as a switch statement
// export const plantSeeds = (yearlyPlan) => {
//     for (const cropRow of yearlyPlan) {
//         for (const seedString of cropRow) {
//             switch (seedString) {
//                 case "Asparagus":
//                     addPlant(createAsparagus())
//                     break;
//                 case "Corn":
//                     addPlant(createCorn())
//                     break;
//                 case "Potato":
//                     addPlant(createPotato())
//                     break;
//                 case "Soybean":
//                     addPlant(createSoybean())
//                     break;
//                 case "Sunflower":
//                     addPlant(createSunflower())
//                     break;
//                 case "Wheat":
//                     addPlant(createWheat())
//                     break;
//             }

//         }
//     }
// }














//          ** easy way **
//             * bad! *//check food type of each object
//add seed object to field.js array
// export const plantSeeds = (yearlyPlan) => {
//     for (const cropRow of yearlyPlan) {
//         for (const seedString of cropRow) {
//             //invoking the create function based on the corresponding food type
//             // using eval()
//             console.log(eval(`create${seedString}()`))
//             addPlant(eval(`create${seedString}()`))

//         }
//     }
// }

// const fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("It's an apple.");
//     // No break here
//   case "banana":
//     console.log("It might also be a banana.");
//     break;
//   case "cherry":
//     console.log("It's a cherry.");
//     break;
//   default:
//     console.log("It's something else.");
// }
