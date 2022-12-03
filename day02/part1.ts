import * as fs from "fs";

const ROOT_DIR="day02";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

class Password {
    constructor(public min: number, public max: number, public letter: string, public password: string) {
    }

    isValidPart1(): boolean {
        let count = 0;
        for (let i = 0; i < this.password.length; i++) {
            if (this.password[i] === this.letter) {
                count++;
            }
        }
        return count >= this.min && count <= this.max;
    }

    isValidPart2(): boolean {
       return (this.password[this.min - 1] === this.letter) !== (this.password[this.max - 1] === this.letter);
    }
}

console.log("==== PART 1 ====");
let contents = readFile(`${ROOT_DIR}/input.txt`);

let passwords = contents.split("\n").map(line => {
    let parts = line.split(" ");
    let minMax = parts[0].split("-");
    let min = parseInt(minMax[0]);
    let max = parseInt(minMax[1]);
    let letter = parts[1][0];
    let password = parts[2];
    return new Password(min, max, letter, password);
});

console.log(`Valid: ${passwords.filter(p => p.isValidPart1()).length}`);

console.log("==== PART 2 ====");
console.log(`Valid: ${passwords.filter(p => p.isValidPart2()).length}`);