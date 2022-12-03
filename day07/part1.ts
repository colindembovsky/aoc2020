import * as fs from "fs";
import { BagRule, BagRuleSet } from "./bagRule";

const ROOT_DIR="day07";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

console.log("==== PART 1 ====");
//let contents = readFile(`${ROOT_DIR}/test-input2.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);
let bagRules = new BagRuleSet(contents.split("\n"));
let canContainShinyGold = bagRules.getColorsThatCanContainRecursive("shiny gold");
console.log(`Can contain shiny gold: ${canContainShinyGold.size}`);

console.log("==== PART 2 ====");
console.log(`Shiny gold must contain: ${bagRules.getContentsCountRecursive("shiny gold")}`);