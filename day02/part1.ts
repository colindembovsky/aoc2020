import * as fs from "fs";

const ROOT_DIR="day02";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

let scoreMap = new Map<string, number>();
scoreMap.set("A X", 3 + 1);
scoreMap.set("A Y", 6 + 2);
scoreMap.set("A Z", 0 + 3);

scoreMap.set("B X", 0 + 1);
scoreMap.set("B Y", 3 + 2);
scoreMap.set("B Z", 6 + 3);

scoreMap.set("C X", 6 + 1);
scoreMap.set("C Y", 0 + 2);
scoreMap.set("C Z", 3 + 3);

console.log("==== PART 1 ====");
let contents = readFile(`${ROOT_DIR}/input.txt`);

let lines = contents.split("\n");
let score = lines.reduce((sum, line) => sum += scoreMap.get(line)!, 0);
console.log("Score: " + score);