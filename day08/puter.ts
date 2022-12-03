class Instruction {
    op: string;
    arg: number;

    constructor(public line: string) {
        const match = line.match(/^(acc|jmp|nop) ([+-]\d+)$/);
        if (match === null) {
            throw new Error(`Invalid instruction: ${line}`);
        }
        this.op = match[1];
        this.arg = parseInt(match[2]);
    }
}

class Puter {
    private program: Instruction[];
    private readonly originalProgram: Instruction[];
    private visited: Set<number>;
    private accumulator: number;
    private pointer: number;
    public infinite: boolean = false;
    
    constructor(lines: string[]) {
        this.originalProgram = lines.map(line => new Instruction(line));
        this.program = lines.map(line => new Instruction(line));
        this.visited = new Set();
        this.accumulator = 0;
        this.pointer = 0;
    }

    private reset() {
        this.program = this.originalProgram.map(instruction => new Instruction(instruction.line));
        this.visited = new Set();
        this.accumulator = 0;
        this.pointer = 0;
        this.infinite = false;
    }

    public fix(): number {
        for (let i = 0; i < this.program.length; i++) {
            this.reset();
            if (this.program[i].op === "nop" && this.program[i].arg !== 0) {
                this.program[i].op = "jmp";
            } else if (this.program[i].op === "jmp") {
                this.program[i].op = "nop";
            }
            this.run();
            if (!this.infinite) {
                return this.accumulator;
            }
        }
        throw new Error("Could not fix program");
    }
    
    public run(): number {
        while (true) {
            if (this.visited.has(this.pointer) || this.pointer >= this.program.length) {
                this.infinite = this.visited.has(this.pointer);
                return this.accumulator;
            }
            
            if (!this.visited.has(this.pointer))
            this.visited.add(this.pointer);
            const instruction = this.program[this.pointer];
            switch (instruction.op) {
                case "acc":
                    this.accumulator += instruction.arg;
                    this.pointer++;
                    break;
                case "jmp":
                    this.pointer += instruction.arg;
                    break;
                case "nop":
                    this.pointer++;
                    break;
            }
        }
    }
}

export default Puter;