import * as fs from "fs";

const ROOT_DIR="day10";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

let contents = readFile(`${ROOT_DIR}/input.txt`);
//let contents = readFile(`${ROOT_DIR}/input.txt`);
let adapters = contents.split("\n").map((line) => parseInt(line)).sort((a, b) => a - b);
adapters.unshift(0);
adapters.push(adapters[adapters.length - 1] + 3);

console.log("==== PART 2 ====");
let waysToGetTo = new Map<number, number>();
waysToGetTo.set(0, 1);
for (let i = 0; i < adapters.length; i++) {
    let adapter = adapters[i];
    let ways = waysToGetTo.get(adapter) || 0;
    for (let j = i + 1; j < adapters.length; j++) {
        let nextAdapter = adapters[j];
        if (nextAdapter - adapter > 3) {
            break;
        }
        waysToGetTo.set(nextAdapter, (waysToGetTo.get(nextAdapter) || 0) + ways);
    }
}
console.log(`Result: ${waysToGetTo.get(adapters[adapters.length - 1])}`);