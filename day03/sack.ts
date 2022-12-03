class Sack {
    private compartment1: string;
    private compartment2: string;
    constructor(line: string) {
        // compartment1 is the first half of the chars
        this.compartment1 = line.substring(0, line.length / 2);
        // compartment2 is the second half of the chars
        this.compartment2 = line.substring(line.length / 2);
    }

    // function to calculate the common letters between the compartments
    public getCommonLetter(): string {
        // convert each compartment to set
        let set1 = new Set(this.compartment1.split(""));
        let set2 = new Set(this.compartment2.split(""));
        // get the intersection of the two sets
        let intersection = new Set([...set1].filter(x => set2.has(x)));
        // convert the intersection back to a string
        return Array.from(intersection).join("")[0];
    }
}

function getScore(letter: string): number {
    // get ascii value of first letter
    let commonVal = letter.charCodeAt(0);
    let offset = commonVal >= 96 ? 96 : 64 - 26;
    return commonVal - offset;
}

// export Sack and getScore
export { Sack, getScore };