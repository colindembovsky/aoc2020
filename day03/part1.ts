import * as fs from "fs";
import { Sack, getScore } from "./sack";

const ROOT_DIR="day03";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

console.log("==== PART 1 ====");
//let contents = readFile(`${ROOT_DIR}/test-input.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);

// create an empty array of Sacks
let sacks: Sack[] = [];
contents.split("\n").forEach(line => {
    let sack = new Sack(line);
    sacks.push(sack);
    // let score = getScore(sack.getCommonLetter());
    // console.log(`Sack: ${line} has common letter ${sack.getCommonLetter()} with score ${score}`);
});
console.log(`Final score: ${sacks.reduce((a, b) => a + getScore(b.getCommonLetter()), 0)}`);