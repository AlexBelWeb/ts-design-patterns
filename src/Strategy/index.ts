interface Movable {
  move(): void;
}

class PetrolMove implements Movable {
  move(): void {
    console.log('Powered by petrol');
  }
}

class ElectricMove implements Movable {
  move(): void {
    console.log('Powered by electricity');
  }
}

class Car {
  protected passengers: number;
  protected model: string;

  private _movable: Movable;

  public set movable(movable: Movable) {
    this._movable = movable;
  }

  constructor(passengers: number, model: string, movable: Movable) {
    this.passengers = passengers;
    this.movable = movable;
    this.model = model;
  }

  move(): void {
    this.movable.move();
  }
}
