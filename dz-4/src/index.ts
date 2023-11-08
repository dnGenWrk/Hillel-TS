interface IShape {
  name: string;
  color: string;
  calculateArea: Function;
}

abstract class Shape implements IShape {
  constructor(readonly name: string, readonly color: string) {}

  abstract calculateArea(): number;
}

class Triangle extends Shape {
  constructor(name: string, color: string, public triangle_base: number, public height: number) {
    super(name, color);
  }
  override calculateArea(): number {
    return (this.triangle_base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(name: string, color: string, public radius: number) {
    super(name, color);
  }
  override calculateArea(): number {
    return this.radius ** 2 * Math.PI;
  }
}

class Square extends Shape {
  constructor(name: string, color: string, public side: number) {
    super(name, color);
  }
  override calculateArea(): number {
    return this.side ** 2;
  }
  private print(): void {
    console.log("Square S = a*a");
  }
}

class Rectangle extends Shape {
  constructor(name: string, color: string, public width: number, public height: number) {
    super(name, color);
  }
  override calculateArea(): number {
    return this.width * this.height;
  }
  private print(): void {
    console.log("Rectangle S = a × b");
  }
}
