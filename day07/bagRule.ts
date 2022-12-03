class BagRule {
    color: string = '';
    contents: Map<string, number> = new Map();
    
    constructor(line: string) {
        this.parseLine(line);
    }

    private parseLine(line: string) {
        const [color, contents] = line.split(' bags contain ');
        this.color = color;
        if (contents !== 'no other bags.') {
            contents.split(', ').forEach(content => {
                const match = content.match(/^(\d+) (.+) bags?\.?$/);
                if (match === null) {
                    throw new Error(`Invalid content: ${content}`);
                }
                this.contents.set(match[2], parseInt(match[1]));
            });
        }
    }
}

class BagRuleSet {
    private rules: Map<string, BagRule> = new Map();
    
    constructor(lines: string[]) {
        lines.forEach(line => {
            const rule = new BagRule(line);
            this.rules.set(rule.color, rule);
        });
    }
    
    public getRule(color: string): BagRule | undefined {
        return this.rules.get(color);
    }
    
    public getColorsThatCanContain(color: string): Set<string> {
        const result = new Set<string>();
        this.rules.forEach(rule => {
            if (rule.contents.has(color)) {
                result.add(rule.color);
            }
        });
        return result;
    }
    
    public getColorsThatCanContainRecursive(color: string): Set<string> {
        const result = new Set<string>();
        const colors = this.getColorsThatCanContain(color);
        colors.forEach(color => {
            result.add(color);
            this.getColorsThatCanContainRecursive(color).forEach(color => result.add(color));
        });
        return result;
    }

    public getContentsCountRecursive(color: string): number {
        const rule = this.getRule(color);
        if (rule === undefined) {
            throw new Error(`No rule for ${color}`);
        }
        let result = 0;
        rule.contents.forEach((count, color) => {
            result += count + count * this.getContentsCountRecursive(color);
        });
        return result;
    }
}

export {
    BagRule,
    BagRuleSet
};