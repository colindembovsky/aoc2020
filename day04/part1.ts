import * as fs from "fs";
import Passport from "./passport";

const ROOT_DIR="day04";

// read in a file and print it out to the console
function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}

console.log("==== PART 1 ====");
let contents = readFile(`${ROOT_DIR}/input.txt`);

let passports = contents.split("\n\n").map(parts => new Passport(parts.split("\n")));
console.log(`Valid Passports: ${passports.filter(passport => passport.isValidPart1()).length}`);

const invalid = `
eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`;

const valid = `
pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
`;

// test invalid passports
let invalidPassports = invalid.split("\n\n").map(parts => new Passport(parts.split("\n")));
let validPassports = valid.split("\n\n").map(parts => new Passport(parts.split("\n")));
if (invalidPassports.filter(passport => !passport.isValidPart2()).length === invalidPassports.length) {
    console.log("Invalid passports works!");
}
if (validPassports.filter(passport => passport.isValidPart2()).length === validPassports.length) {
    console.log("Valid passports works!");
}

console.log("==== PART 2 ====");
console.log(`Valid Passports: ${passports.filter(passport => passport.isValidPart2()).length}`);