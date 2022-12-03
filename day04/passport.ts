class Passport {
    private fields: Map<string, string> = new Map();

    constructor(lines: string[]) {
        lines.forEach(line => {
            line.split(' ').forEach(field => {
                const [key, value] = field.split(':');
                this.addField(key, value);
            });
        });
    }
    
    public addField(field: string, value: string) {
        this.fields.set(field, value);
    }
    
    public isValidPart1(): boolean {
        return this.fields.size === 8 || (this.fields.size === 7 && !this.fields.has('cid'));
    }

    public isValidPart2(): boolean {
        return this.isValidPart1() &&
            this.isValidByr() && 
            this.isValidIyr() && 
            this.isValidEyr() && 
            this.isValidHgt() && 
            this.isValidHcl() && 
            this.isValidEcl() && 
            this.isValidPid();
    }

    private isValidYr(field: string, min: number, max: number): boolean {
        const value = this.fields.get(field);
        if (value === undefined) {
            return false;
        }
        const year = parseInt(value);
        return year >= min && year <= max;
    }

    public isValidByr(): boolean {
        return this.isValidYr('byr', 1920, 2002);
    }

    public isValidIyr(): boolean {
        return this.isValidYr('iyr', 2010, 2020);
    }

    public isValidEyr(): boolean {
        return this.isValidYr('eyr', 2020, 2030);
    }

    public isValidHgt(): boolean {
        const value = this.fields.get('hgt');
        if (value === undefined) {
            return false;
        }
        const match = value.match(/^(\d+)(cm|in)$/);
        if (match === null) {
            return false;
        }
        const height = parseInt(match[1]);
        const unit = match[2];
        return unit === 'cm' ? height >= 150 && height <= 193 : height >= 59 && height <= 76;
    }

    public isValidHcl(): boolean {
        const value = this.fields.get('hcl');
        if (value === undefined) {
            return false;
        }
        return value.match(/^#[0-9a-f]{6}$/) !== null;
    }

    public isValidEcl(): boolean {
        const value = this.fields.get('ecl');
        if (value === undefined) {
            return false;
        }
        return value.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/) !== null;
    }

    public isValidPid(): boolean {
        const value = this.fields.get('pid');
        if (value === undefined) {
            return false;
        }
        return value.match(/^\d{9}$/) !== null;
    }
}


export default Passport;