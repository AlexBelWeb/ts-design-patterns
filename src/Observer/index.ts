interface Observer {
  update(ob: object): void;
}

interface Observable {
  registerObserver(observer: Observer): void;

  removeObserver(observer: Observer): void;

  notifyObservers(): void;
}

class StockInfo {
  private _USD: number;
  public get USD(): number {
    return this._USD;
  }

  public set USD(v: number) {
    this._USD = v;
  }

  private _EUR: number;
  public get EUR(): number {
    return this._EUR;
  }

  public set EUR(v: number) {
    this._EUR = v;
  }
}

class Stock implements Observable {
  stockInfo: StockInfo;
  observers: Set<Observer>;

  constructor() {
    this.observers = new Set<Observer>();
    this.stockInfo = new StockInfo();
  }

  registerObserver(observer: Observer): void {
    this.observers.add(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers.delete(observer);
  }

  notifyObservers(): void {
    this.observers.forEach(o => o.update(this.stockInfo));
  }

  public market(): void {
    this.stockInfo.USD = Math.random() * 20 + 20;
    this.stockInfo.EUR = Math.random() * 30 + 30;
  }
}

class Broker implements Observer {
  private _name: string;
  stock: Observable;

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }

  constructor(name: string, obs: Observable) {
    this.name = name;
    this.stock = obs;
    this.stock.registerObserver(this);
  }

  public update(ob: object): void {
    const stInfo: StockInfo = <StockInfo>ob;

    if (stInfo.USD > 30) {
      console.log(
        `Broker ${this.name} sells dollars; Dollar rate: ${stInfo.USD}`,
      );
    } else {
      console.log(
        `Broker ${this.name} buys dollars; Dollar rate: ${stInfo.USD}`,
      );
    }
  }

  public stopTrade() {
    this.stock.removeObserver(this);
    this.stock = undefined;
  }
}

class Bank implements Observer {
  private _name: string;

  public get name() {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }

  stock: Observable;

  constructor(name: string, obs: Observable) {
    this.name = name;
    this.stock = obs;
    this.stock.registerObserver(this);
  }

  public update(ob: object): void {
    const stInfo: StockInfo = <StockInfo>ob;

    if (stInfo.EUR > 40) {
      console.log(
        `Bank ${this.name} sells euro; Euro rate: ${stInfo.EUR}`,
      );
    } else {
      console.log(
        `Bank ${this.name} buys euro; Euro rate: ${stInfo.EUR}`,
      );
    }
  }

}
