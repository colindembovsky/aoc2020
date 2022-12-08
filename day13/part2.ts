import * as fs from "fs";

const ROOT_DIR="day13";

const realSchedule = "19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,859,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37";
const testSchedule = "7,13,x,x,59,x,31,19";

function getBusses(schedule: string): { d: number, s: number }[] {
    return schedule.split(",").map(b => b === "x" ? -1 : parseInt(b)).map((b, i) => ({ d: b, s: i })).filter(b => b.d !== -1);
}

function getEarliestMatch(busses: { d: number, s: number }[]) {
    let step = busses.shift()!.d;
    let time = 0;
    busses.forEach(b => {
        while((time + b.s) % b.d !== 0) {
            time += step;
        }
        step *= b.d; 
    });
    return time;
}

console.log(getEarliestMatch(getBusses("17,x,13,19")));
console.log(getEarliestMatch(getBusses("67,7,59,61")));
console.log(getEarliestMatch(getBusses("67,x,7,59,61")));
console.log(getEarliestMatch(getBusses("67,7,x,59,61")));
console.log(getEarliestMatch(getBusses("1789,37,47,1889")));

console.log("==== PART 2 ====");
console.log(getEarliestMatch(getBusses(realSchedule)));