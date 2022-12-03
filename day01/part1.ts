import * as fs from "fs";

const ROOT_DIR="day01";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

//let contents = readFile(`${ROOT_DIR}/test-input.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);
//console.log(contents);

console.log("==== PART 1 ====");

// split the contents of the file by empty lines
let elfInventory = contents.split("\n\n");
console.log("elves", elfInventory.length);

let elves = elfInventory.map((elf) => {
    let caloryStrings = elf.split("\n");
    // convert each line to an array of numbers
    let calories = caloryStrings.map(c => parseInt(c));
    let total = calories.reduce((a, b) => a + b, 0);

    return { 
        calories: calories,
        total: total
    };
}).sort((a, b) => a.total - b.total).reverse();
console.log("Most calories: ", elves[0].total);

console.log("==== PART 2 ====");
console.log("Most calories top 3 elves: ", elves.slice(0, 3).reduce((a, b) => a + b.total, 0));
