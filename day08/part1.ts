import * as fs from "fs";
import Puter from "./puter";

const ROOT_DIR="day08";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

console.log("==== PART 1 ====");
//let contents = readFile(`${ROOT_DIR}/test-input.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);

let puter = new Puter(contents.split("\n"));
console.log(`Accumulator: ${puter.run()}`);
console.log(`Infinite: ${puter.infinite}`);

console.log("==== PART 2 ====");
console.log(`Accumulator: ${puter.fix()}`);
