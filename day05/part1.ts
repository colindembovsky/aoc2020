import * as fs from "fs";
import Seat from "./seat";

const ROOT_DIR="day05";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

console.log("==== PART 1 ====");
//let contents = readFile(`${ROOT_DIR}/test-input.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);
let passes = contents.split("\n").map(pass => new Seat(pass));
//passes.forEach(s => console.log(`Pass: ${s.pass} Row: ${s.row} Column: ${s.column} Seat ID: ${s.getSeatId()}`));
passes.sort((a, b) => a.getSeatId() - b.getSeatId()).reverse();
console.log(`Highest Seat ID: ${passes[0].getSeatId()}`);

console.log("==== PART 2 ====");
// trim the first 8 and last 8 seats
passes = passes.slice(8, passes.length - 8);
//passes.forEach(p => console.log(p.getSeatId()));
let idSet = new Set(passes.map(p => p.getSeatId()));
// create an array with indexes from 10 to 20
let compareSet = new Set(Array.from(Array(passes[0].getSeatId()).keys()).slice(passes[passes.length - 1].getSeatId(), passes[0].getSeatId()));
// find the difference between the two sets
let diff = new Set([...compareSet].filter(x => !idSet.has(x)));
console.log(`My Seat ID: ${diff.values().next().value}`);
//contents = readFile(`${ROOT_DIR}/input.txt`);

