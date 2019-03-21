abstract class Pizza {
  private _name: string;

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  constructor(name: string) {
    this.name = name;
  }

  public abstract getCost(): number;
}

class ItalianPizza extends Pizza {
  constructor() {
    super('Italian Pizza');
  }

  public getCost(): number {
    return 100;
  }
}

class AmericanPizza extends Pizza {
  constructor() {
    super('American Pizza');
  }

  public getCost(): number {
    return 200;
  }
}

abstract class PizzaOptions extends Pizza {
  protected _pizza: Pizza;
  constructor(name: string, pizza: Pizza) {
    super(name);
    this._pizza = pizza;
  }
}

class CheesePizza extends PizzaOptions {
  constructor(pizza: Pizza) {
    super(`${pizza.name}, with cheese`, pizza);
  }

  public getCost(): number {
    return this.getCost() + 50;
  }
}

class TomatoPizza extends PizzaOptions {
  constructor(pizza: Pizza) {
    super(`${pizza.name}, with tomatoes`, pizza);
  }

  public getCost(): number {
    return this.getCost() + 70;
  }
}
