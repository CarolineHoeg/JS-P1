abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;

    get color(): string { return this._color; }
    set color(color: string) { this._color = color; }

    toString(): string {
        return `A shape that's ${this.color}. Area: ${this.area}. Perimeter: ${this.perimeter}`;
    }
}

class Circle extends Shape {
    protected _radius: number;
    constructor(radius: number, color: string) {
        super(color);
        this._radius = radius;
    }
    get radius(): number { return this._radius; }
    set radius(radius: number) { this._radius = radius; }

    get area(): number {
        return (Math.PI * Math.pow(this._radius, 2));
    }
    get perimeter(): number {
        return (2 * Math.PI * this._radius);
    }
}

let circle1 = new Circle(5, 'blue');
console.log(circle1.toString());
circle1.color = 'red';
circle1.radius = 4;
console.log(circle1.toString());

class Cylinder extends Circle {
    private _height: number;
    constructor(height: number, radius: number, color: string) {
        super(radius, color);
        this._height = height;
    }

    get height(): number { return this._height; }
    set height(height: number) { this._height = height; }

    get area(): number {
        return (2 * Math.PI * this._radius * (this._height * this._radius));
    }
    get perimeter(): number {
        throw new Error("Not Implemented");
    }
    get volume(): number {
        return (Math.PI * Math.pow(this._radius, 2) * this._height);
    }
    toString() :string {
        return `A cylinder that's ${this.color}. Area: ${this.area}. Volume: ${this.volume}.`;
    }
}

let cylinder1 = new Cylinder(10, 5, 'purple');
console.log(cylinder1.toString());
cylinder1.color = 'yellow';
cylinder1.height = 5;
cylinder1.radius = 2;
//console.log(cylinder1.perimeter);
console.log(cylinder1.toString());