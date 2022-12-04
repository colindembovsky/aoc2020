class Seat {
    constructor(
        public readonly row: number,
        public readonly col: number,
        public state: string,
        public previousState: string,
        public map: SeatMap
    ) {}
    
    // return the number of occupied seats adjacent to this seat
    getAdjacentOccupiedSeats(): number {
        let occupiedSeats = 0;
        for (let row = this.row - 1; row <= this.row + 1; row++) {
            for (let col = this.col - 1; col <= this.col + 1; col++) {
                if (row === this.row && col === this.col) {
                    continue;
                }
                let s = this.map.get(row, col)
                if (s && s.previousState === "#") {
                    occupiedSeats++;
                }
            }
        }
        return occupiedSeats;
    }

    setNewStatePart1(): void {
        this.previousState = this.state;
        if (this.state === "L" && this.getAdjacentOccupiedSeats() === 0) {
            this.state = "#";
        } else if (this.state === "#" && this.getAdjacentOccupiedSeats() >= 4) {
            this.state = "L";
        }
    }

    setNewStatePart2(): void {
        this.previousState = this.state;
        if (this.state === "L" && this.getVisibleOccupiedSeats() === 0) {
            this.state = "#";
        } else if (this.state === "#" && this.getVisibleOccupiedSeats() >= 5) {
            this.state = "L";
        }
    }

    getVisibleOccupiedSeats(): number {
        let occupiedSeats = 0;
        // get seats in each direction
        occupiedSeats += this.getVisibleOccupiedSeatsInDirection(0, -1); // left
        occupiedSeats += this.getVisibleOccupiedSeatsInDirection(0, 1); // right
        occupiedSeats += this.getVisibleOccupiedSeatsInDirection(-1, 0); // up
        occupiedSeats += this.getVisibleOccupiedSeatsInDirection(1, 0); // down
        occupiedSeats += this.getVisibleOccupiedSeatsInDirection(-1, -1); // up-left
        occupiedSeats += this.getVisibleOccupiedSeatsInDirection(-1, 1); // up-right
        occupiedSeats += this.getVisibleOccupiedSeatsInDirection(1, -1); // down-left
        occupiedSeats += this.getVisibleOccupiedSeatsInDirection(1, 1); // down-right
        return occupiedSeats;
    }

    getVisibleOccupiedSeatsInDirection(rowDir: number, colDir: number): number {
        let row = this.row + rowDir;
        let col = this.col + colDir;
        let s = this.map.get(row, col);
        while (s) {
            if (s.previousState === "#") {
                return 1;
            } else if (s.previousState === "L") {
                return 0;
            }
            row += rowDir;
            col += colDir;
            s = this.map.get(row, col);
        }
        return 0;
    }

    changed(): boolean {
        return this.state !== this.previousState;
    }

    reset(): void {
        this.previousState = this.state;
    }
}

class SeatMap {
    private map: Seat[][];

    constructor(lines: string[]) {
        this.map = lines.map((l, row) => l.split("").map((s, col) => new Seat(row, col, s, s, this)));
    }

    get rows(): number {
        return this.map.length;
    }

    get cols(): number {
        return this.map[0].length;
    }

    get(row: number, col: number): Seat | undefined {
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
            return undefined;
        }
        return this.map[row][col];
    }

    public mapChanged(): boolean {
        return this.map.some(row => row.some(seat => seat.changed()));
    }

    public occupiedCount(): number {
        return this.map.reduce((acc, row) => acc + row.reduce((rcc, seat) => rcc + (seat.state === "#" ? 1 : 0), 0), 0);
    }

    public iteratePart1(): void {
        this.map.forEach(row => row.forEach(seat => seat.reset()));
        this.map.forEach(row => row.forEach(seat => seat.setNewStatePart1()));
    }

    public iteratePart2(): void {
        this.map.forEach(row => row.forEach(seat => seat.reset()));
        this.map.forEach(row => row.forEach(seat => seat.setNewStatePart2()));
    }

    print(): void {
        this.map.forEach(row => console.log(row.map(seat => seat.state).join("")));
    }
}

export { Seat, SeatMap };