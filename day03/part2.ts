import * as fs from "fs";
import { getScore } from "./sack";

const ROOT_DIR="day03";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

class Group {
    private sack1 = new Set();
    private sack2 = new Set();
    private sack3 = new Set();
    constructor(sack1: string, sack2: string, sack3: string) {
        this.sack1 = new Set(sack1.split(""));
        this.sack2 = new Set(sack2.split(""));
        this.sack3 = new Set(sack3.split(""));
    }

    public getCommonLetter(): string {
        // find the common letter in all 3 strings in the array
        let intersection = new Set([...this.sack1].filter(x => this.sack2.has(x) && this.sack3.has(x)));
        return Array.from(intersection).join("")[0];
    }
}

let contents = readFile(`${ROOT_DIR}/input.txt`);
console.log("==== PART 2 ====");

let groupLines = contents.split("\n");
let groups: Group[] = [];
for (let i = 0; i < groupLines.length; i+=3) {
    let group = new Group(groupLines[i], groupLines[i+1], groupLines[i+2]);
    groups.push(group);
    // let cLetter = group.getCommonLetter();
    // let score = getScore(cLetter);
    // console.log(`Group: has common letter ${cLetter} with score ${score}`);
}

console.log(`Final score: ${groups.reduce((a, b) => a + getScore(b.getCommonLetter()), 0)}`);