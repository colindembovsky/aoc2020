import * as fs from "fs";

const ROOT_DIR="day13";

const realSchedule = "19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,859,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37";
const testSchedule = "7,13,x,x,59,x,31,19";

const realBusses = realSchedule.split(",").filter(b => b !== "x").map(b => parseInt(b));
const testBusses = testSchedule.split(",").filter(b => b !== "x").map(b => parseInt(b));



console.log("==== PART 2 ====");
//const earliest = earliestBus(testStart, testBusses);
