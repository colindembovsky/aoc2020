import * as fs from "fs";

const ROOT_DIR="day01";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

//let contents = readFile(`${ROOT_DIR}/test-input.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);
//console.log(contents);

console.log("==== PART 1 ====");

let nums = contents.split("\n");
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (i !== j && parseInt(nums[i]) + parseInt(nums[j]) === 2020) {
            console.log(parseInt(nums[i]) * parseInt(nums[j]));
            break;
        }
    }
}

console.log("==== PART 2 ====");
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
            if (parseInt(nums[i]) + parseInt(nums[j]) + parseInt(nums[k]) === 2020) {
                console.log(parseInt(nums[i]) * parseInt(nums[j]) * parseInt(nums[k]));
                break;
            }
        }
    }
}