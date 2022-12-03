class Seat {
    row: number = 0;
    column: number = 0;
    
    constructor(public pass: string) {
        this.parsePass(pass);
    }

    private parsePass(pass: string) {
        this.parseRow(pass.substring(0, 7));
        this.parseColumn(pass.substring(7));
    }

    private parseRow(row: string) {
        this.row = this.parseBinary(row, 'F', 'B');
    }

    private parseColumn(column: string) {
        this.column = this.parseBinary(column, 'L', 'R');
    }

    private parseBinary(binary: string, zero: string, one: string): number {
        let result = 0;
        for (let i = 0; i < binary.length; i++) {
            const char = binary.charAt(i);
            if (char === one) {
                result += Math.pow(2, binary.length - i - 1);
            } else if (char !== zero) {
                throw new Error(`Invalid character ${char} in ${binary}`);
            }
        }
        return result;
    }

    public getSeatId(): number {
        return this.row * 8 + this.column;
    }
}

export default Seat;