import * as fs from "fs";

const ROOT_DIR="day09";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

class XMAS {
    constructor(public preamble: number, public data: number[]) {
    }

    public findInvalidNumber(): number {
        for (let i = this.preamble; i < this.data.length; i++) {
            const range = this.data.slice(i - this.preamble, i);
            const target = this.data[i];
            if (!this.isValid(range, target)) {
                return target;
            }
        }
        return -1;
    }

    private isValid(range: number[], target: number): boolean {
        for (let i = 0; i < range.length; i++) {
            for (let j = i + 1; j < range.length; j++) {
                if (range[i] + range[j] === target) {
                    return true;
                }
            }
        }
        return false;
    }
}

//let contents = readFile(`${ROOT_DIR}/test-input.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);
let nums = contents.split("\n").map((s) => parseInt(s));

console.log("==== PART 1 ====");
let xmas1 = new XMAS(25, nums);
console.log(xmas1.findInvalidNumber());

console.log("==== PART 2 ====");

