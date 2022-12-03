import * as fs from "fs";

const ROOT_DIR="day06";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

console.log("==== PART 1 ====");
//let contents = readFile(`${ROOT_DIR}/test-input.txt`);
let contents = readFile(`${ROOT_DIR}/input.txt`);

let groups = contents.split("\n\n");
let total = 0;
groups.forEach(group => {
    let answers = new Set();
    group.split("\n").forEach(person => {
        person.split("").forEach(answer => {
            answers.add(answer);
        });
    });
    total += answers.size;
    //console.log(`Answers: ${answers.size}`);
});
console.log(`Total: ${total}`);

console.log("==== PART 2 ====");
total = 0;
groups.forEach(group => {
    let answers = group.split("\n").map(person => new Set(person.split("")));
    let common = answers[0];

    for (let i = 1; i < answers.length; i++) {
        common = new Set([...common].filter(x => answers[i].has(x)));
    }

    total += common.size;
    //console.log(`Common: ${common.size}`);
});
console.log(`Total: ${total}`);

