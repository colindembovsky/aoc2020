import * as fs from "fs";

const ROOT_DIR="day12";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

class Ship {
    wpEast: number = 10;
    wpNorth: number = 1;

    constructor(public east: number, public north: number, public facing: number) {
    }

    public move(line: string) {
        const dir = line[0];
        const dist = parseInt(line.substring(1));
        this.doMove(dir, dist);
    }

    private doMove(dir: string, dist: number) {
        if (dir == "N") {
            this.wpNorth += dist;
        } else if (dir === "S") {
            this.wpNorth -= dist;
        } else if (dir === "E") {
            this.wpEast += dist;
        } else if (dir === "W") {
            this.wpEast -= dist;
        } else if (dir === "L") {
            this.rotateWaypoint(dist);
        } else if (dir === "R") {
            this.rotateWaypoint(-dist);
        } else if (dir === "F") {
            this.east += this.wpEast * dist;
            this.north += this.wpNorth * dist;
        }
    }

    private rotateWaypoint(degrees: number) {
        const radians = degrees * Math.PI / 180;
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        const x = this.wpEast * cos - this.wpNorth * sin;
        const y = this.wpEast * sin + this.wpNorth * cos;
        this.wpEast = Math.round(x);
        this.wpNorth = Math.round(y);
    }

    manhattanDistance(): number {
        return Math.abs(this.east) + Math.abs(this.north);
    }
}

let contents = readFile(`${ROOT_DIR}/input.txt`);
let lines = contents.split("\n");

console.log("==== PART 2 ====");
let ship = new Ship(0, 0, 90);
lines.forEach(l => ship.move(l));
console.log(ship.manhattanDistance());