import * as fs from "fs";
import { SeatMap } from "./Seat";

const ROOT_DIR="day11";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

let contents = readFile(`${ROOT_DIR}/input.txt`);
let lines = contents.split("\n");

console.log("==== PART 1 ====");
let seatMap = new SeatMap(lines);
do {
    seatMap.iteratePart1();
} while (seatMap.mapChanged());
console.log(`Occupied seats: ${seatMap.occupiedCount()}`);

console.log("==== PART 2 ====");
seatMap = new SeatMap(lines);
do {
    seatMap.iteratePart2();
} while (seatMap.mapChanged());
console.log(`Occupied seats: ${seatMap.occupiedCount()}`);
