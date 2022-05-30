import { Units as units } from '../data/units.js';

let test_p = document.getElementById("test-div");
console.log(units);

/* Function to find the unit who has the highest attack against the selected one
Takes one input, the unit selected which is passed to the function as object */

const findCounter = unit => {
    unitClass = unit.armourClass;

}

localStorage.setItem("all_units", JSON.stringify(units));