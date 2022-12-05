import * as fs from "fs";
import { emit } from "process";

const ROOT_DIR="day12";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

class Ship {
    constructor(public east: number, public north: number, public facing: number) {
    }

    public move(line: string) {
        const dir = line[0];
        const dist = parseInt(line.substring(1));
        this.doMove(dir, dist);
    }

    private doMove(dir: string, dist: number) {
        if (dir == "N") {
            this.north += dist;
        } else if (dir === "S") {
            this.north -= dist;
        } else if (dir === "E") {
            this.east += dist;
        } else if (dir === "W") {
            this.east -= dist;
        } else if (dir === "L") {
            this.facing = (this.facing - dist + 360) % 360;
        } else if (dir === "R") {
            this.facing = (this.facing + dist) % 360;
        } else if (dir === "F") {
            if (this.facing === 0) {
                this.north += dist;
            } else if (this.facing === 90) {
                this.east += dist;
            } else if (this.facing === 180) {
                this.north -= dist;
            } else if (this.facing === 270) {
                this.east -= dist;
            }
        }
    }

    manhattanDistance(): number {
        return Math.abs(this.east) + Math.abs(this.north);
    }
}

let contents = readFile(`${ROOT_DIR}/input.txt`);
let lines = contents.split("\n");

console.log("==== PART 1 ====");
let ship = new Ship(0, 0, 90);
lines.forEach(l => ship.move(l));
console.log(ship.manhattanDistance());