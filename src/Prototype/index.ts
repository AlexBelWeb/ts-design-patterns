interface Figure {
  clone(): Figure;
  getInfo(): void;
}

class Rectangle implements Figure {
  width: number;
  height: number;

  constructor(w: number, h: number) {
    this.width = w;
    this.height = h;
  }

  public clone(): Figure {
    return new Rectangle(this.width, this.height);
  }

  public getInfo() {
    console.log(`Rectangle ${this.width}x${this.height}`);
  }
}
