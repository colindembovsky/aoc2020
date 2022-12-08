import * as fs from "fs";

const ROOT_DIR="day13";

const realSchedule = "19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,859,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37";
const realStart = 1001798;

const testSchedule = "7,13,x,x,59,x,31,19";
const testStart = 939;

const realBusses = realSchedule.split(",").filter(b => b !== "x").map(b => parseInt(b));
const testBusses = testSchedule.split(",").filter(b => b !== "x").map(b => parseInt(b));

function earliestBus(start: number, busses: number[]): { bus: number, wait: number } {
    let earliest = { bus: 0, wait: Number.MAX_SAFE_INTEGER };
    for (const bus of busses) {
        const nextArrivalWait = Math.ceil(start / bus) * bus - start;
        if (nextArrivalWait < earliest.wait) {
            earliest = { bus, wait: nextArrivalWait };
        }
    }
    return earliest;
}

console.log("==== PART 1 ====");
//const earliest = earliestBus(testStart, testBusses);
const earliest = earliestBus(realStart, realBusses);
console.log(`Earliest bus: ${earliest.bus}, wait: ${earliest.wait}, product: ${earliest.bus * earliest.wait}`);