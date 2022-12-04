import * as fs from "fs";

const ROOT_DIR="day10";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}
let contents = readFile(`${ROOT_DIR}/input.txt`);

console.log("==== PART 1 ====");
let adapters = contents.split("\n").map((line) => parseInt(line)).sort((a, b) => a - b);
adapters.unshift(0);
adapters.push(adapters[adapters.length - 1] + 3);
let diffs = new Map<number, number>();
for (let i = 0; i < adapters.length - 1; i++) {
    let diff = adapters[i + 1] - adapters[i];
    diffs.set(diff, (diffs.get(diff) || 0) + 1);
}
console.log(`Result: ${diffs.get(1)! * diffs.get(3)!}`);