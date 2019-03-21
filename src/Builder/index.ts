class Flour {
  private _sort: string;
  public get sort(): string {
    return this._sort;
  }
  public set sort(sort: string) {
    this._sort = sort;
  }

  constructor(sort: string) {
    this.sort = sort;
  }
}

class Salt {}

class Additives {
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
}

class Bread {
  private _flour: Flour;
  public get flour(): Flour {
    return this._flour;
  }
  public set flour(flour: Flour) {
    this._flour = flour;
  }

  private _salt: Salt;
  public get salt(): Salt {
    return this._salt;
  }
  public set salt(salt: Salt) {
    this._salt = salt;
  }

  private _additives: Additives;
  public get additives(): Additives {
    return this._additives;
  }
  public set additives(additives: Additives) {
    this._additives = additives;
  }

  public toString(): string {
    let breadInstance: string = '';
    if (this.flour) {
      breadInstance += `${this.flour.sort} \n`;
    }
    if (this.salt) {
      breadInstance += 'Salt \n';
    }
    if (this.additives) {
      breadInstance += `Additives: ${this.additives.name} \n`;
    }

    return breadInstance;
  }
}

abstract class BreadBuilder {
  private _bread: Bread;

  public get bread(): Bread {
    return this._bread;
  }

  public createBread(): void {
    this._bread = new Bread();
  }

  public abstract setFlour(): void;
  public abstract setSalt(): void;
  public abstract setAdditives(): void;
}

class Baker {
  public bake(breadBuilder: BreadBuilder): Bread {
    breadBuilder.createBread();
    breadBuilder.setFlour();
    breadBuilder.setSalt();
    breadBuilder.setAdditives();
    return breadBuilder.bread;
  }
}

class RyeBreadBuilder extends BreadBuilder {
  public setSalt(): void {
    this.bread.salt = new Salt();
  }
  public setAdditives(): void {}
  public setFlour(): void {
    this.bread.flour = new Flour('Rye Flour');
  }
}

class WheatBreadBuilder extends BreadBuilder {
  public setSalt(): void {
    this.bread.salt = new Salt();
  }
  public setAdditives(): void {
    this.bread.additives = new Additives('Monosodium glutamate');
  }
  public setFlour(): void {
    this.bread.flour = new Flour('Wheat Flour');
  }
}
