abstract class House {
  private _material: string;

  public get material(): string {
    return this._material;
  }

  constructor(material: string) {
    this._material = material;
  }
}

class PanelHouse extends House {
  constructor() {
    super('panels');
  }
}

class WoodHouse extends House {
  constructor() {
    super('wood');
  }
}

abstract class HouseDeveloper {
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

  public abstract create(): House;
}

class PanelHouseDeveloper extends HouseDeveloper {
  constructor(name: string) {
    super(name);
  }

  create(): House {
    return new PanelHouse();
  }
}

class WoodHouseDeveloper extends HouseDeveloper {
  constructor(name: string) {
    super(name);
  }

  create(): House {
    return new WoodHouse();
  }
}
