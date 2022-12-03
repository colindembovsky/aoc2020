import * as fs from "fs";
import { Sack, getScore } from "./sack";

const ROOT_DIR="day03";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

//let contents = readFile(`${ROOT_DIR}/test-input.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);
let map = contents.split("\n");

let goal = map.length - 1;
let width = map[0].length;

function getTreeCount(right: number, down: number): number {
    let x = 0;

    let treeCount = 0;
    for (let y = down; y <= goal; y += down) {
        x = (x + right) % width;
        map[y][x] === "#" ? treeCount++ : null;
        //console.log(`x: ${x}, y: ${y}, char: ${map[y][x]}`);
    }
    return treeCount;
}

console.log("==== PART 1 ====");
console.log(`Tree Count: ${getTreeCount(3, 1)}`);

console.log("==== PART 2 ====");
let slopes = [ getTreeCount(1, 1), getTreeCount(3, 1), getTreeCount(5, 1), getTreeCount(7, 1), getTreeCount(1, 2) ];
console.log(`Tree Count: ${slopes.reduce((a, b) => a * b)}`);